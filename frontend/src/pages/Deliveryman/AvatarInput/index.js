import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import Badge from '~/components/BadgeColor';
import { MdInsertPhoto } from 'react-icons/md';
import { Container } from './styles';

export default function ({ avatar_url = '' }) {
  const loading = useSelector((state) => state.deliveryman.loading);
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.url);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {!preview ? (
          !avatar_url && !avatar_url.avatar ? (
            <>
              <MdInsertPhoto size="40" color="#ddd" />
              Adicionar foto
            </>
          ) : (
            <>
              <Badge name={avatar_url.name} larger={true} />
            </>
          )
        ) : (
          <img src={preview} alt="" />
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

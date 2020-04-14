import Mail from '../../lib/Mail';

class DetailsMail {
  get key() {
    return 'DetailsMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman, recipient } = data;
    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Produto já está disponível para a retirada',
      template: 'details',
      context: {
        deliveryman: deliveryman.name,
        product: delivery.product,
        recipient: recipient.name,
      },
    });
  }
}

export default new DetailsMail();

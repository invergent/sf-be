const emailFormatter = {
  createNewOrderEmail: (customer, services, recipients) => recipients.map((recipient) => {
    const { firstname, lastname, emailAddress } = recipient;

    return {
      from: 'orders@oyasmartfix.com',
      template_id: 'd-bbc459175d8e4d4cb275678be8420d88',
      personalizations: [{
        to: [{ name: `${firstname} ${lastname}`, email: emailAddress }],
        dynamic_template_data: {
          customerPhone: customer.phone,
          services
        }
      }]
    };
  }),
};

export default emailFormatter;

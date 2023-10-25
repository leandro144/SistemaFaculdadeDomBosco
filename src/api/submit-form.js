import { Form, } from 'formidable-serverless';
import db from '../../models';
import sequelize from "../../config/database";

export const config = {
  api: {
    bodyParser: false,
  },
};

const myFunction = async (req, res) => {
  const form = new Form();
  form.uploadDir = './public/uploads';

  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    });

    await sequelize.sync();

    const createdForm = await db.Form.create({
      fullName: fields.fullName,
      rg: fields.rg,
      cpf: fields.cpf,
      attachment: files.attachment.name,
    });

    res.status(201).json(createdForm);
  } catch (error) {
    console.error('Erro ao processar o formulário:', error);
    res.status(500).send('Erro interno ao processar o formulário.');
  }
};

export default myFunction;

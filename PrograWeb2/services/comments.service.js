const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('../utils');

class CommentsService {
  constructor() {
    this.Comments = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.Comments.push({
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        text: faker.lorem.text(),
      });
    }
  }

  //FAKER
  
  //-----------------------------------------------------------------------------------
  //Crear Establecimientos
  async create(data) {
    const newComment = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.Comments.push(newComment);
    return newComment;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        var Comments = this.Comments.slice(0, limit);
        if (Comments.length > 0) {
          resolve(Comments);
        } else {
          rejected('');
        }
      }, 5000);
    });
  }
  //-----------------------------------------------------------------------------------
  //Encontrar Comments por ID
  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const Comment = this.Comments.find((item) => item.id === id);
    //NOT FOUND
    validateData(Comment, NOTFOUND, 'No encontrado', (data) => !data);
    validateData(
        Comment,
      CONFLICT,
      'CONFLICTO, El Comentario esta bloqueado.',
      (data) => data.isActive == false
    );
    return Comment;
  }

  //-----------------------------------------------------------------------------------
  //Actualizar comentario por ID
  async update(id, changes) {
    const index = this.Comments.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Comentario no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentComment = this.Comments[index];
    this.Comments[index] = {
      ...currentComment,
      ...changes,
    };
    return this.Comments[index];
  }

  async updateComplete(id, changes) {
    const index = this.Comments.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Comentario no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentComment = this.Comments[index];
    this.Comments[index] = {
      id: currentComment.id,
      ...changes,
    };
    return this.Comments[index];
  }

  //-----------------------------------------------------------------------------------
  //Borrar comentario por ID
  async delete(id) {
    const index = this.Comments.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Comentario no encontrado');
    }
    this.Comments.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}


module.exports = CommentsService;
const connection = require("../database/connection.js");
const hashData = require("../utils/hashData.js");

class BaseModel {
  constructor(modelName) {
    this.modelName = modelName;
  }

  // CRUD

  async getAll() {
    const data = await connection.table(this.modelName).whereNull("deleted_at");
    return data;
  }

  async getById(id) {
    const data = await connection
      .table(this.modelName)
      .where({ id })
      .whereNull("deleted_at")
      .first();
    return data;
  }

  async create(data) {
    if (this.modelName == "users") {
      data.password = hashData(data.password);
      data.verification = 0;
    }
    const result = await connection.table(this.modelName).insert(data);
    return result;
  }

  async update(id, data) {
    const result = await connection
      .table(this.modelName)
      .where({ id })
      .whereNull("deleted_at")
      .update(data);
    return result;
  }

  async delete(id) {
    const result = await connection
      .table(this.modelName)
      .where({ id })
      .whereNull("deleted_at")
      .update({ deleted_at: new Date() });
    return result;
  }

  async first() {
    const data = await connection.table(this.modelName).first();
    return data;
  }

  async last() {
    const data = await connection.table(this.modelName).last();
    return data;
  }

  async count() {
    const data = await connection.table(this.modelName).count();
    return data;
  }

  async findBy(columnName, value) {
    const data = await connection
      .table(this.modelName)
      .where(columnName, value)
      .first();
    return data;
  }

module.exports = BaseModel;

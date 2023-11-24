const api = require("../models/User"); //import api list from schema

const getapi = async (req, res) => {
  try {
    const list = await api.find();
    res.status(200).json({ msg: "all is found", list });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}; //get all data from api(list)
const ADDAPI = async (req, res) => {
  try {
    const ADDAPI = await api.create(req.body);
    res.status(201).json({ msg: "new contact ", ADDAPI });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
}; //add new data to api
const UPDAPI = async (req, res) => {
  try {
    const UPDAPI = await api.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.status(201).json({ msg: "data updated ", UPDAPI: UPDAPI });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
}; //update data with id
const DELAPI = async (req, res) => {
  try {
    const DELAPI = await api.findByIdAndDelete({ _id: req.params.id });
    res.status(201).json({ msg: "data deleted ", DELAPI: DELAPI });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
}; //delete data with id

module.exports = { getapi, ADDAPI, UPDAPI, DELAPI }; //export all functions

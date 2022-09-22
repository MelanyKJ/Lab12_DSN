const Persona = require('../model/Persona')

//MOSTRAR
module.exports.mostrar = (req, res) =>{
  Persona.find({}, (error, personas)=>{
    if(error){
      return res.status(500).json({
          message: "Error"
      })
    }
    return res.render('index', {personas})
  })
}

//CREAR
module.exports.crear = (req, res) =>{
  //console.log(req.body)
  const persona = new Persona({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    telefono: req.body.telefono
  })
  persona.save(function(error, persona){
    if(error){
      return res.status(500).json({
        message:'error'
      })
    }
    res.redirect('/')
  })
}

//EDITAR
module.exports.editar = (req, res) =>{
  const id = req.body.id_editar
  const nombre = req.body.nombre_editar
  const apellido = req.body.apellido_editar
  const edad = req.body.edad_editar
  const telefono = req.body.telefono_editar

  Persona.findByIdAndUpdate(id, {nombre, apellido, edad, telefono},(error,persona) =>{
    if(error){
      return res.status(500).json({
        message:'error'
      })
    }
    res.redirect('/')
  })
}

//ELIMINAR
module.exports.borrar = (req, res) =>{
  const id = req.params.id
  Persona.findByIdAndRemove(id,(error,persona)=>{
    if(error){
      return res.status(500).json({
        message:'error'
      })
    }
    res.redirect('/')
  })
}

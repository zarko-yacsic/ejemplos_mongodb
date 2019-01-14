
// # Mostrar todos los registros...
db.getCollection('gclient_envios_test2').find({})

// # Mostrar todos los registros ordenados por 'id_proyecto' de forma ascendente, e 'id_correo' de forma descendente...
db.getCollection('gclient_envios_test2').find({}).sort({"id_proyecto" : 1, "id_correo" : -1})

// # Mostrar registros donde 'campo' sea igual a...
db.getCollection('gclient_envios_test2').find({"id_campania" : 344})

// # Mostrar registros donde 'campo' sea equivalente a...
db.getCollection('gclient_envios_test2').find({"id_campania" : {$eq: 345}})
db.getCollection('gclient_envios_test2').find({"nombre" : {$eq : "Ramón"}})

// # Mostrar registros donde 'campo' sea mayor a...
db.getCollection('gclient_envios_test2').find({"id_campania" : {$gt : 343}})

// # Mostrar registros donde 'campo' sea mayor o igual a...
db.getCollection('gclient_envios_test2').find({"id_campania" : {$gte : 343}})

// # Mostrar registros donde 'campo' concida con cualquier elemento de un array dado...
db.getCollection('gclient_envios_test2').find({"id_correo" : {$in : [ 1, 2, 6 ]}})

// # Mostrar registros donde 'campo' no concida con ningún elemento de un array dado...
db.getCollection('gclient_envios_test2').find({"id_correo" : {$nin : [ 1, 2, 6 ]}})

// # Mostrar registros donde 'campo' no sea igual a...
db.getCollection('gclient_envios_test2').find({"estado_encuesta" : { $ne : 0}})

// # Mostrar registros donde 'campo' concida con una expresion regular...
db.getCollection('gclient_envios_test2').find({"nombre" : { $regex : /^Ramó.*/}})

// # Mostrar registros donde campo 'correo' no sea equivalente, y además exista dentro de la colección...
db.getCollection('gclient_envios_test2').find({"correo" : {$ne : "mrcdiseno@gmail.com", $exists : true}})

// # Mostrar los mismos registros del caso anterior, pero usando el operador 'and'...
db.getCollection('gclient_envios_test2').find({
    $and : [
        {"correo" : {$ne : "mrcdiseno@gmail.com"}},
        {"correo" : {$exists : true}}
    ]
})

// # Mostrar registros donde estado_encuesta=1 y from_correo='RegExp'
db.getCollection('gclient_envios_test2').find({
    $and: [
        {"estado_encuesta": 1}, 
        {"from_correo": {$regex: /^zyacsic[0-9]@tga.*/}}
    ]
})

// # Mostrar registros donde estado_encuesta=1 o from_correo=RegExp
db.getCollection('gclient_envios_test2').find({
    $or: [
        {"estado_encuesta" : 1}, 
        {"from_correo" : {$regex : /^zyacsic[0-9]@tga.*/}}
    ]
})

// # Mostrar registros donde (id_proyecto=343 OR id_proyecto=345) AND (estado_encuesta=1 OR from_correo='RegExp') 
db.getCollection('gclient_envios_test2').find({
    $and: [
        {$or: [{"id_proyecto": 343}, {"id_proyecto": 345}]},
        {$or: [{"estado_encuesta": 1}, {"from_correo": {$regex : /^zyacsic@tga.*/}}]}
    ]
})


























/* CONSULTAS UPDATE */

// # Actualizar a 0 los registros donde 'enviado' concida con cualquier elemento del array [1, 2, 3]...
db.getCollection('gclient_envios_test2').update(
    {"enviado" : {$in : [1, 2, 3]}},
    {$set : {"enviado" : NumberInt(0)}},
    {multi : true}
)







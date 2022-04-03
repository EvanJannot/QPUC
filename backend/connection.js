//Permet de faire le lien avec ma base de donnée mongodb

function connect() {
  return 'mongodb+srv://ejannot:evanjannot33400@cluster0.lvpb9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}

module.exports = connect

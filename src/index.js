import app from './app'

async function  main(){
    await  app.listen(9000, () => {
     console.log('App listening on port 9000!');
 });
}

main()
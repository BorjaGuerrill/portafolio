//la esena, es donde todos los objetos se ponen
const scene = new THREE.Scene();
//crea la camara o perspectiva
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
//el "renderer" es lo que pone los objetos en la pantalla
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
/*luces, el const color indica color (diferente para cada uno) y el
const intensity indica que tan brillante es la luz (lo mismo para 
todos)*/
const color = 0x800080;
const colo2r = 0x00FF00;
const col3or = 0xFF0000;
const co4lor = 0x0000FF;
const intensity = 0.4;
//aqui une los dos valores de la luz para crear un solo const
const light = new THREE.DirectionalLight(color, intensity);
const light2 = new THREE.DirectionalLight(colo2r, intensity);
const light3 = new THREE.DirectionalLight(col3or, intensity);
const light4 = new THREE.DirectionalLight(co4lor, intensity);
//elije la posicion de cada luz
light.position.set(60, -30, 60);
light2.position.set(20, -30, 60);
light3.position.set(-20, -30, 60);
light4.position.set(-60, -30, 60);
/*helpers, ahora no sirven de nada pero si le quito el comentario a 
las lineas de scene.add(helper/2/3/4) apareseran unas lineas indcando
donde apuntan las luces*/
const helper = new THREE.DirectionalLightHelper( light, 5 );
const helper2 = new THREE.DirectionalLightHelper( light2, 5 );
const helper3 = new THREE.DirectionalLightHelper( light3, 5 );
const helper4 = new THREE.DirectionalLightHelper( light4, 5 );
// scene.add( helper );
// scene.add( helper2 );
// scene.add( helper3 );
// scene.add( helper4 );
//mete las luces en la esena
scene.add(light);
scene.add(light2);
scene.add(light3);
scene.add(light4);
/*crea una esfera, cubo, torus, y cilindro. El primer valor "geomtetry"
indica la forma y tamano de la forma, el segundo valor "material" indica
el material y color de la forma */
const sphere = {
  geometry: new THREE.SphereGeometry(5, 32),
  material: new THREE.MeshPhongMaterial(0x323d52)
};
const cube = {
  geometry: new THREE.BoxGeometry(16, 16, 16),
  material: new THREE.MeshPhongMaterial(0x323d52)
};
const torus = {
  geometry: new THREE.TorusGeometry(10, 3, 16, 100),
  material: new THREE.MeshPhongMaterial(0x323d52)
}
const cylinder = {
  geometry: new THREE.CylinderGeometry(13, 13, 28, 7),
  material: new THREE.MeshPhongMaterial(0x323d52)
}
//une los dos valores de la forma para crear una sola const
cube.mesh = new THREE.Mesh(cube.geometry, cube.material);
sphere.mesh = new THREE.Mesh(sphere.geometry, sphere.material)
torus.mesh = new THREE.Mesh(torus.geometry, torus.material)
cylinder.mesh = new THREE.Mesh(cylinder.geometry, torus.material)
//anade las formas a la esena
scene.add(cube.mesh);
scene.add(sphere.mesh)
scene.add(torus.mesh)
scene.add(cylinder.mesh)
//elige la posicion de la camara, poniendola un poco para atras para ver las formas
camera.position.z = 60;
//elige la posicion de las formas, separandolas
cube.mesh.position.x = 15;
torus.mesh.position.x = -15;
cylinder.mesh.position.x = -50
sphere.mesh.position.x = 50
//genera la escena y hace que las formas giren cada frame
function render() {
  renderer.render(scene, camera);

  cube.mesh.rotation.x += 0.01;
  cube.mesh.rotation.y -= 0.01;
  sphere.mesh.rotation.x -= 0.01;
  sphere.mesh.rotation.z -= 0.01;
  torus.mesh.rotation.x += 0.01
  torus.mesh.rotation.z -= 0.01
  cylinder.mesh.rotation.x += 0.01
  cylinder.mesh.rotation.z -= 0.01
  requestAnimationFrame(render);
}

render();
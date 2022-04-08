// Propiedad intelectual: Esta prueba fue desarrollada por TCIT el año 2014 y registrada bajo propiedad intelectual, cualquier publicación o difamación podría estar sujeta a acciones legales. Hay otras empresas que nos han copiado esta prueba, no aceptes imitaciones, exige el original xD
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes, tampoco subirla a repositorios de github públicos

// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
  { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
  { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
  { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
  { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
  { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: 'PALTOS' },
  { id: 2, name: 'AVELLANOS' },
  { id: 3, name: 'CEREZAS' },
  { id: 4, name: 'NOGALES' },
]

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
  { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
  { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
  { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
  { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
  { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
];

const farms = [
  { id: 1, name: 'AGRICOLA SANTA ANA' },
  { id: 2, name: 'VINA SANTA PAULA' },
  { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
];

/*
  SECCIÓN PROBLEMAS
    - No promover la copia:
	  - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
	  - No subir a repositorios públicos (github, o similares)
	  - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un intérprete de javascript como node y ejecutarlo de manera local
	  - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
	  - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
	- Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
	- Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
	- Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
  - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
*/
// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
};

function sortAlphabetical(array) {
  return array.sort((previousElement, currentElement) => {
    return previousElement < currentElement
      ? -1
      : (previousElement > currentElement ? 1 : 0);
  });
}

function findPaddockTypeName(paddockTypeId) {
  const paddockTypeInfo = paddockType.find(typeInfo => typeInfo.id === paddockTypeId);
  return paddockTypeInfo.name;
}

function findManagerName(managerId) {
  const managerInfo = paddockManagers.find(paddockManager => paddockManager.id === managerId);
  return managerInfo ? managerInfo.name : null;
}

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  // CODE HERE
};

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
  const farmTypes = [];

  paddocks.forEach(paddock => {
    const farmIndex = farmTypes.findIndex(farm => farm.paddockTypeId === paddock.paddockTypeId);

    let newFarmTypeInfo = {
      "paddockTypeId": paddock.paddockTypeId,
      "area": paddock.area
    }

    if (farmIndex > -1) {
      const area = newFarmTypeInfo.area + farmTypes[farmIndex].area;
      farmTypes[farmIndex] = {
        ...newFarmTypeInfo,
        area,
        "hectare": area / 10000
      }
    } else {
      farmTypes.push({
        ...newFarmTypeInfo,
        "hectare": newFarmTypeInfo.area / 10000
      });
    }
  });

  const sortedFarmTypes = farmTypes.sort((previousType, currentType) => {
    return currentType.hectare - previousType.hectare;
  });

  return sortedFarmTypes.map(type => findPaddockTypeName(type.paddockTypeId));
}

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
  const managers = [];

  paddocks.forEach(paddock => {
    const managerIndex = managers.findIndex(manager => manager.paddockManagerId === paddock.paddockManagerId);

    let newManagerInfo = {
      "paddockManagerId": paddock.paddockManagerId,
      "area": paddock.area
    }

    if (managerIndex > -1) {
      const area = newManagerInfo.area + managers[managerIndex].area;
      managers[managerIndex] = {
        ...newManagerInfo,
        area,
        "hectare": area / 10000
      }
    } else {
      managers.push({
        ...newManagerInfo,
        "hectare": newManagerInfo.area / 10000
      });
    }
  });

  const sortedManagers = managers.sort((previousManager, currentManager) => {
    return currentManager.hectare - previousManager.hectare;
  });

  return sortedManagers.map(manager => findManagerName(manager.paddockManagerId));
}

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
  // CODE HERE
}

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
  // CODE HERE
}

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
  const paddockManagersForestal = paddocks.filter(paddocksManager => {
    return paddocksManager.farmId === 3 && paddocksManager.area > 1000;
  });

  const paddocksManagersName = paddockManagersForestal.map(managerForestal => {
    return findManagerName(managerForestal.paddockManagerId);
  });
  const paddocksManagersFiltered = [ ...new Set(paddocksManagersName) ];

  return sortAlphabetical(paddocksManagersFiltered);
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  const managers = Object.fromEntries(paddockManagers.map(manager => {
    const paddocksIdsManaged = paddocks.filter(paddock => {
      if (paddock.paddockManagerId === manager.id) return paddock.farmId;
    });
    const farmsNames = paddocksIdsManaged.map(paddock => {
      const farm = farms.find(farm => farm.id === paddock.farmId);
      return farm.name;
    });
    const filteredFarmsNames = [ ...new Set(farmsNames) ];

    return [ manager.name, sortAlphabetical(filteredFarmsNames) ];
  }));

  return managers;
}

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
  return Object.fromEntries(paddocks.map(paddock => {
    const key = `${findPaddockTypeName(paddock.paddockTypeId)}-${paddock.harvestYear}`;
    const paddocksManagers = paddocks.filter(filteredPaddock => {
      return filteredPaddock.paddockTypeId === paddock.paddockTypeId && filteredPaddock.harvestYear === paddock.harvestYear;
    });

    const filteredManagers = Object.fromEntries(paddocksManagers.map(paddocksManager => {
      return [ paddocksManager.paddockManagerId, findManagerName(paddocksManager.paddockManagerId) ];
    }));

    return [ key, filteredManagers ];
  }));
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador 
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
  // CODE HERE
}


// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
// Cualquier cambio hará que su prueba quede invalidada automáticamente
console.log('Pregunta 0');
console.log(listPaddockManagerIds());
console.log('Pregunta 1');
console.log(listPaddockManagersByName());
console.log('Pregunta 2');
console.log(sortPaddockTypeByTotalArea());
console.log('Pregunta 3');
console.log(sortFarmManagerByAdminArea());
console.log('Pregunta 4');
console.log(farmManagerNames());
console.log('Pregunta 5');
console.log(biggestAvocadoFarms());
console.log('Pregunta 6');
console.log(biggestCherriesManagers());
console.log('Pregunta 7');
console.log(farmManagerPaddocks());
console.log('Pregunta 8');
console.log(paddocksManagers());
console.log('Pregunta 9');
console.log(newManagerRanking());

import mongoose from 'mongoose'

const departamentoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    enum: [
      '25 de mayo',
      '9 de julio',
      'Adolfo Alsina',
      'Adolfo Gonzales Chaves',
      'Alberti',
      'Almirante Brown',
      'Arrecifes',
      'Avellaneda',
      'Ayacucho',
      'Azul',
      'Bahía Blanca',
      'Balcarce',
      'Baradero',
      'Benito Juárez',
      'Berazategui',
      'Berisso',
      'Bolívar',
      'Bragado',
      'Brandsen',
      'Campana',
      'Cañuelas',
      'Capitán Sarmiento',
      'Carlos Casares',
      'Carlos Tejedor',
      'Carmen de Areco',
      'Castelli',
      'Chacabuco',
      'Chascomús',
      'Chivilcoy',
      'Colón',
      'Coronel de Marina L. Rosales',
      'Coronel Dorrego',
      'Coronel Pringles',
      'Coronel Suárez',
      'Daireaux',
      'Dolores',
      'Ensenada',
      'Escobar',
      'Esteban Echeverría',
      'Exaltación de la Cruz',
      'Ezeiza',
      'Florencio Varela',
      'Florentino Ameghino',
      'General Alvarado',
      'General Alvear',
      'General Arenales',
      'General Belgrano',
      'General Guido',
      'General Juan Madariaga',
      'General La Madrid',
      'General Las Heras',
      'General Lavalle',
      'General Paz',
      'General Pinto',
      'General Pueyrredón',
      'General Rodríguez',
      'General San Martín',
      'General Viamonte',
      'General Villegas',
      'Guaminí',
      'Hipólito Yrigoyen',
      'Hurlingham',
      'Ituzaingó',
      'José C. Paz',
      'Junín',
      'La Costa',
      'La Matanza',
      'La Plata',
      'Lanús',
      'Laprida',
      'Las Flores',
      'Leandro N. Alem',
      'Lincoln',
      'Lobería',
      'Lobos',
      'Lomas de Zamora',
      'Luján',
      'Magdalena',
      'Maipú',
      'Malvinas Argentinas',
      'Mar Chiquita',
      'Marcos Paz',
      'Mercedes',
      'Merlo',
      'Monte',
      'Monte Hermoso',
      'Moreno',
      'Morón',
      'Navarro',
      'Necochea',
      'Olavarría',
      'Patagones',
      'Pehuajó',
      'Pellegrini',
      'Pergamino',
      'Pila',
      'Pilar',
      'Pinamar',
      'Presidente Perón',
      'Puán',
      'Punta Indio',
      'Quilmes',
      'Ramallo',
      'Rauch',
      'Rivadavia',
      'Rojas',
      'Roque Pérez',
      'Saavedra',
      'Saladillo',
      'Salliqueló',
      'Salto',
      'San Andrés de Giles',
      'San Antonio de Areco',
      'San Cayetano',
      'San Fernando',
      'San Isidro',
      'San Miguel',
      'San Nicolás',
      'San Pedro',
      'San Vicente',
      'Suipacha',
      'Tandil',
      'Tapalqué',
      'Tigre',
      'Tordillo',
      'Tornquist',
      'Trenque Lauquen',
      'Tres Arroyos',
      'Tres de Febrero',
      'Tres Lomas',
      'Vicente López',
      'Villa Gesell',
      'Villarino',
      'Zárate',
      'Ambato',
      'Ancasti',
      'Andalgalá',
      'Antofagasta de la Sierra',
      'Belén',
      'Capayán',
      'Capital',
      'El Alto',
      'Fray Mamerto Esquiú',
      'La Paz',
      'Paclín',
      'Pomán',
      'Santa María',
      'Santa Rosa',
      'Tinogasta',
      'Valle Viejo',
      '12 de octubre',
      '1ñ de Mayo',
      '2 de abril',
      '25 de mayo',
      '9 de julio',
      'Almirante Brown',
      'Bermejo',
      'Chacabuco',
      'Comandante Fernández',
      'Fray Justo Santa María de Oro',
      'General Belgrano',
      'General Donovan',
      'General Güemes',
      'Independencia',
      'Libertad',
      'Libertador General San Martín',
      'Maipú',
      'Mayor Luis J. Fontana',
      'O Higgins',
      'Presidencia de la Plaza',
      'Quitilipi',
      'San Fernando',
      'San Lorenzo',
      'Sargento Cabral',
      'Tapenagá',
      'Biedma',
      'Cushamen',
      'Escalante',
      'Florentino Ameghino',
      'Futaleufú',
      'Gaiman',
      'Gastre',
      'Languiñeo',
      'Mártires',
      'Paso de Indios',
      'Rawson',
      'Río Senguer',
      'Sarmiento',
      'Tehuelches',
      'Telsen',
      'Comuna I',
      'Comuna II',
      'Comuna III',
      'Comuna IV',
      'Comuna IX',
      'Comuna V',
      'Comuna VI',
      'Comuna VII',
      'Comuna VIII',
      'Comuna X',
      'Comuna XI',
      'Comuna XII',
      'Comuna XIII',
      'Comuna XIV',
      'Comuna XV',
      'Calamuchita',
      'Capital',
      'Colón',
      'Cruz del Eje',
      'General Roca',
      'General San Martín',
      'Ischilín',
      'Juárez Celman',
      'Marcos Juárez',
      'Minas',
      'Pocho',
      'Presidente Roque Sáenz Peña',
      'Punilla',
      'Río Cuarto',
      'Río Primero',
      'Río Seco',
      'Río Segundo',
      'San Alberto',
      'San Javier',
      'San Justo',
      'Santa María',
      'Sobremonte',
      'Tercero Arriba',
      'Totoral',
      'Tulumba',
      'Unión',
      'Bella Vista',
      'Berón de Astrada',
      'Capital',
      'Concepción',
      'Curuzú Cuatiá',
      'Empedrado',
      'Esquina',
      'General Alvear',
      'General Paz',
      'Goya',
      'Itatí',
      'Ituzaingó',
      'Lavalle',
      'Mburucuyá',
      'Mercedes',
      'Monte Caseros',
      'Paso de los Libres',
      'Saladas',
      'San Cosme',
      'San Luis del Palmar',
      'San Martín',
      'San Miguel',
      'San Roque',
      'Santo Tomé',
      'Sauce',
      'Colón',
      'Concordia',
      'Diamante',
      'Federación',
      'Federal',
      'Feliciano',
      'Gualeguay',
      'Gualeguaychú',
      'Islas del Ibicuy',
      'La Paz',
      'Nogoyá',
      'Paraná',
      'San Salvador',
      'Tala',
      'Uruguay',
      'Victoria',
      'Villaguay',
      'Bermejo',
      'Formosa',
      'Laishi',
      'Matacos',
      'Patiño',
      'Pilagás',
      'Pilcomayo',
      'Pirané',
      'Ramón Lista',
      'Cochinoca',
      'Dr. Manuel Belgrano',
      'El Carmen',
      'Humahuaca',
      'Ledesma',
      'Palpalá',
      'Rinconada',
      'San Antonio',
      'San Pedro',
      'Santa Bárbara',
      'Santa Catalina',
      'Susques',
      'Tilcara',
      'Tumbaya',
      'Valle Grande',
      'Yavi',
      'Atreucó',
      'Caleu Caleu',
      'Capital',
      'Catriló',
      'Chalileo',
      'Chapaleufú',
      'Chical Co',
      'Conhelo',
      'Curacó',
      'Guatraché',
      'Hucal',
      'Lihuel Calel',
      'Limay Mahuida',
      'Loventué',
      'Maracó',
      'Puelén',
      'Quemú Quemú',
      'Rancul',
      'Realicó',
      'Toay',
      'Trenel',
      'Utracán',
      'Arauco',
      'Capital',
      'Castro Barros',
      'Chamical',
      'Chilecito',
      'Coronel Felipe Varela',
      'Famatina',
      'General Angel V. Peñaloza',
      'General Belgrano',
      'General Juan F. Quiroga',
      'General Lamadrid',
      'General Ocampo',
      'General San Martín',
      'Independencia',
      'Rosario Vera Peñaloza',
      'San Blas de los Sauces',
      'Sanagasta',
      'Vinchina',
      'Capital',
      'General Alvear',
      'Godoy Cruz',
      'Guaymallén',
      'Junín',
      'La Paz',
      'Las Heras',
      'Lavalle',
      'Luján de Cuyo',
      'Maipú',
      'Malargüe',
      'Rivadavia',
      'San Carlos',
      'San Martín',
      'San Rafael',
      'Santa Rosa',
      'Tunuyán',
      'Tupungato',
      '25 de mayo',
      'Apóstoles',
      'Cainguás',
      'Candelaria',
      'Capital',
      'Concepción',
      'Eldorado',
      'General Manuel Belgrano',
      'Guaraní',
      'Iguazú',
      'Leandro N. Alem',
      'Libertador Grl. San Martín',
      'Montecarlo',
      'Oberá',
      'San Ignacio',
      'San Javier',
      'San Pedro',
      'Aluminé',
      'Añelo',
      'Catán Lil',
      'Chos Malal',
      'Collón Curá',
      'Confluencia',
      'Huiliches',
      'Lácar',
      'Loncopué',
      'Los Lagos',
      'Minas',
      'ñorquín',
      'Pehuenches',
      'Picún Leufú',
      'Picunches',
      'Picunches',
      'Zapala',
      '25 de mayo',
      '9 de julio',
      'Adolfo Alsina',
      'Avellaneda',
      'Bariloche',
      'Conesa',
      'El Cuy',
      'General Roca',
      'ñorquincó',
      'Pichi Mahuida',
      'Pilcaniyeu',
      'San Antonio',
      'Valcheta',
      'Anta',
      'Cachi',
      'Cafayate',
      'Capital',
      'Cerrillos',
      'Chicoana',
      'General Güemes',
      'Grl. José de San Martín',
      'Guachipas',
      'Iruya',
      'La Caldera',
      'La Candelaria',
      'La Poma',
      'La Viña',
      'Los Andes',
      'Metán',
      'Molinos',
      'Orán',
      'Rivadavia',
      'Rosario de la Frontera',
      'Rosario de Lerma',
      'San Carlos',
      'Santa Victoria',
      '25 de mayo',
      '9 de julio',
      'Albardón',
      'Angaco',
      'Calingasta',
      'Capital',
      'Caucete',
      'Chimbas',
      'Iglesia',
      'Jáchal',
      'Pocito',
      'Rawson',
      'Rivadavia',
      'San Martín',
      'Santa Lucía',
      'Sarmiento',
      'Ullúm',
      'Valle Fértil',
      'Zonda',
      'Ayacucho',
      'Belgrano',
      'Chacabuco',
      'Coronel Pringles',
      'General Pedernera',
      'Gobernador Dupuy',
      'Junín',
      'La Capital',
      'Libertador General San Martín',
      'Corpen Aike',
      'Deseado',
      'Güer Aike',
      'Lago Argentino',
      'Lago Buenos Aires',
      'Magallanes',
      'Río Chico',
      '9 de julio',
      'Belgrano',
      'Caseros',
      'Castellanos',
      'Constitución',
      'Garay',
      'General López',
      'General Obligado',
      'Iriondo',
      'La Capital',
      'Las Colonias',
      'Rosario',
      'San Cristóbal',
      'San Javier',
      'San Jerónimo',
      'San Justo',
      'San Lorenzo',
      'San Martín',
      'Vera',
      'Aguirre',
      'Alberdi',
      'Atamisqui',
      'Avellaneda',
      'Banda',
      'Belgrano',
      'Capital',
      'Choya',
      'Copo',
      'Figueroa',
      'General Taboada',
      'Guasayán',
      'Jiménez',
      'Juan F. Ibarra',
      'Loreto',
      'Mitre',
      'Moreno',
      'Ojo de Agua',
      'Pellegrini',
      'Quebrachos',
      'Río Hondo',
      'Rivadavia',
      'Robles',
      'Salavina',
      'San Martín',
      'Sarmiento',
      'Silípica',
      'Antártida Argentina',
      'Islas del Atlántico Sur',
      'Río Grande',
      'Ushuaia',
      'Burruyacú',
      'Capital',
      'Chicligasta',
      'Cruz Alta',
      'Famaillá',
      'Graneros',
      'Juan Bautista Alberdi',
      'La Cocha',
      'Leales',
      'Lules',
      'Monteros',
      'Río Chico',
      'Simoca',
      'Tafí del Valle',
      'Tafí Viejo',
      'Trancas',
      'Yerba Buena'
    ]
  }
})

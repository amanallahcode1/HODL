'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('reviews', [{
    writer: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Sed augue lacus viverra vitae congue eu. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Scelerisque in dictum non consectetur a. Tellus in metus vulputate eu scelerisque felis. Enim eu turpis egestas pretium aenean. Nunc pulvinar sapien et ligula ullamcorper. Habitant morbi tristique senectus et netus et. Volutpat diam ut venenatis tellus in metus vulputate eu. Quam viverra orci sagittis eu volutpat odio.',
    spotId: 1
  },
  {
    writer: 'Dennis Rodman',
    review: 'Dictum sit amet justo donec enim diam vulputate ut pharetra. Enim lobortis scelerisque fermentum dui faucibus in ornare. Malesuada fames ac turpis egestas. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna. Sollicitudin nibh sit amet commodo nulla. Lorem dolor sed viverra ipsum. Aliquet sagittis id consectetur purus ut faucibus. Ultrices tincidunt arcu non sodales neque sodales. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Adipiscing commodo elit at imperdiet dui accumsan. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Mattis pellentesque id nibh tortor id aliquet lectus proin. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Tellus orci ac auctor augue mauris. Massa tempor nec feugiat nisl. Sagittis vitae et leo duis ut diam quam. Feugiat vivamus at augue eget arcu dictum.',
    spotId: 1
  },
  {
    writer: 'Harvey Spector',
    review: 'Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Vulputate enim nulla aliquet porttitor lacus. Commodo nulla facilisi nullam vehicula ipsum. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat nisl vel pretium lectus quam id leo in. Sed elementum tempus egestas sed sed risus pretium quam. Nunc sed velit dignissim sodales ut eu. Id diam vel quam elementum. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Dis parturient montes nascetur ridiculus. Magna sit amet purus gravida quis blandit turpis cursus in. Odio eu feugiat pretium nibh. In nibh mauris cursus mattis. Duis ultricies lacus sed turpis tincidunt id aliquet. Magna fringilla urna porttitor rhoncus dolor purus non enim. Faucibus a pellentesque sit amet. Ut aliquam purus sit amet luctus venenatis. A arcu cursus vitae congue mauris rhoncus.',
    spotId: 2
  },
  {
    writer: 'Lil Baby',
    review: 'Libero volutpat sed cras ornare arcu. Bibendum neque egestas congue quisque. Quis auctor elit sed vulputate mi sit amet. At auctor urna nunc id cursus metus. Viverra mauris in aliquam sem fringilla. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Porttitor leo a diam sollicitudin. Posuere sollicitudin aliquam ultrices sagittis orci a. Turpis nunc eget lorem dolor sed. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.',
    spotId: 1
  },
  {
    writer: 'Neymar Da Silva',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 2
  },
  {
    writer: 'Jake Paul',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 3
  },
  {
    writer: 'Floyd Mayweather',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 4
  },
  {
    writer: 'The Boogie Man',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 3
  },
  {
    writer: 'Will Ferrel',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 4
  },
  {
    writer: 'Roddy Rich',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 5
  },
  {
    writer: 'Meriem Debbagh',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 6
  },
  {
    writer: 'Seif Bostanji',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 5
  },
  {
    writer: 'Ann Frank',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 6
  },
  {
    writer: 'Nick Jonas',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 7
  },
  {
    writer: 'Jon Jones',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 8
  },
  {
    writer: 'Christian Smith',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 7
  },
  {
    writer: 'Danny Duncan',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 8
  },
  {
    writer: 'Harry Potter',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 9
  },
  {
    writer: 'Hermione Granger',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 10
  },
  {
    writer: 'Tony Stark',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 9
  },
  {
    writer: 'Batman',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 10
  },
  {
    writer: 'Peter Parker',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 1
  },
  {
    writer: 'Emma Watts',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 2
  },
  {
    writer: 'Pristine',
    review: 'Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl nisi scelerisque eu ultrices vitae auctor eu. Orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nibh venenatis cras sed felis eget velit aliquet. At tellus at urna condimentum mattis pellentesque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vitae sapien pellentesque habitant morbi. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacinia quis vel eros donec ac. Elit eget gravida cum sociis natoque penatibus et.',
    spotId: 4
  },
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

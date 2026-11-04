// Alle merken en toestellen die op de site staan (alleen modellen met een foto in img/toestellen/).
// Nieuw model: zet de foto in img/toestellen/<slug>.webp, voeg de slug toe aan js/fotos.js en zet het model bovenaan de juiste lijst.
window.MERKEN = [
  {
    slug: 'apple', naam: 'Apple', tekst: 'Apple iPhone en iPad',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'iPhone 18 Pro Max', 'iPhone 18 Pro', 'iPhone Duo', 'iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17', 'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16', 'iPhone 15 Pro Max',
        'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15', 'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14',
        'iPhone SE (2022)', 'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 mini', 'iPhone 12 Pro Max',
        'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 mini', 'iPhone SE (2020)', 'iPhone 11 Pro Max', 'iPhone 11 Pro',
        'iPhone 11', 'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X', 'iPhone 8 Plus',
        'iPhone 8', 'iPhone 7 Plus', 'iPhone 7', 'iPhone 6s Plus', 'iPhone 6s', 'iPhone 6 Plus',
        'iPhone 6', 'iPhone SE (2016)', 'iPhone 5s', 'iPhone 5c', 'iPhone 4s', 'iPhone 4',
        'iPod touch (5e/6e generatie)', 'iPod touch (4e generatie)',
      ] },
      { naam: 'iPads', type: 'tablet', modellen: [
        'iPad Pro 12.9-inch (4e generatie)', 'iPad Pro 12.9-inch (3e generatie)', 'iPad Pro 12.9-inch (2e generatie)', 'iPad Pro 12.9-inch (1e generatie)', 'iPad Pro 11-inch (2e generatie)', 'iPad Pro 11-inch (1e generatie)',
        'iPad Pro 10.5-inch', 'iPad Pro 9.7-inch (2017)', 'iPad Pro 9.7-inch', 'iPad Air (4e generatie)', 'iPad Air 2', 'iPad Air',
        'iPad (10e generatie)', 'iPad (9e generatie)', 'iPad (7e generatie)', 'iPad (6e generatie)', 'iPad (5e generatie)', 'iPad 4',
        'iPad 3', 'iPad 2', 'iPad mini 5', 'iPad mini 4', 'iPad mini 3', 'iPad mini 2',
        'iPad mini',
      ] },
    ],
  },
  {
    slug: 'htc', naam: 'HTC', tekst: 'HTC',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'HTC U11', 'HTC 10', 'HTC One A9s', 'HTC One A9', 'HTC One M9', 'HTC One M8',
        'HTC One M7', 'HTC One mini 2', 'HTC One mini', 'HTC Desire 820', 'HTC Desire 816', 'HTC Desire 610',
        'HTC Desire 600', 'HTC Desire 510', 'HTC Desire 500', 'HTC Desire 300', 'HTC Desire 301', 'HTC Desire 320',
        'HTC One X', 'HTC One M8s',
      ] },
    ],
  },
  {
    slug: 'huawei', naam: 'Huawei', tekst: 'Huawei',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'Huawei P40 Pro+', 'Huawei P40 Pro', 'Huawei P40', 'Huawei P40 lite', 'Huawei P30 Pro', 'Huawei P30',
        'Huawei P30 lite', 'Huawei P20 Pro', 'Huawei P20', 'Huawei P20 lite', 'Huawei P10', 'Huawei P10 lite',
        'Huawei P9 Plus', 'Huawei P9', 'Huawei P9 lite', 'Huawei P8', 'Huawei P8 lite', 'Huawei P smart 2019',
        'Huawei P smart', 'Huawei Mate 20 Pro', 'Huawei Mate 20', 'Huawei Mate 20 lite', 'Huawei Mate 10 lite', 'Huawei Y7 2019',
        'Huawei Y6 2019', 'Honor 10', 'Honor 9', 'Honor 8', 'Huawei P smart+', 'Huawei Y3',
        'Huawei Y625', 'Huawei Mate 10', 'Huawei G630', 'Huawei G530', 'Huawei G700', 'Huawei G740',
        'Huawei G750', 'Huawei G600', 'Huawei Y5 II', 'Huawei Y6 II', 'Huawei Y360', 'Huawei G6',
        'Huawei Y6', 'Huawei P8 lite 2017', 'Huawei P7', 'Huawei P6', 'Huawei G8', 'Huawei G7',
      ] },
    ],
  },
  {
    slug: 'lg', naam: 'LG', tekst: 'LG',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'LG G8 ThinQ', 'LG G7 ThinQ', 'LG G6', 'LG G5', 'LG G4', 'LG G3',
        'LG G2', 'LG K10 2018', 'LG K10 2017', 'LG K10', 'LG K8 2017', 'LG K8',
        'LG K4', 'LG Nexus 5', 'LG L90', 'LG L70', 'LG Magna', 'LG Nexus 4',
        'LG Optimus G', 'LG K4 2017', 'LG G4 mini', 'LG G3 mini', 'LG G2 mini', 'LG Fino',
        'LG Bello',
      ] },
    ],
  },
  {
    slug: 'nokia', naam: 'Nokia', tekst: 'Nokia',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'Nokia 8.1', 'Nokia 7.1', 'Nokia 6.1', 'Nokia 5.1', 'Nokia 8', 'Nokia 7 Plus',
        'Nokia 7', 'Nokia 6', 'Nokia 5', 'Nokia 3', 'Nokia 2', 'Nokia Lumia 950',
        'Nokia Lumia 640', 'Nokia Lumia 635', 'Nokia Lumia 630', 'Microsoft Lumia 940', 'Microsoft Lumia 940 XL', 'Nokia Lumia 1015',
        'Nokia Lumia 1013', 'Microsoft Lumia 640 XL', 'Microsoft Lumia 550', 'Microsoft Lumia 540', 'Microsoft Lumia 532', 'Microsoft Lumia 535',
        'Nokia Lumia 820', 'Nokia Lumia 830', 'Nokia Lumia 520', 'Nokia Lumia 530', 'Microsoft Lumia 435', 'Nokia Lumia 800',
        'Microsoft Lumia 950 XL', 'Nokia Lumia 930', 'Nokia Lumia 925', 'Nokia Lumia 920', 'Nokia Lumia 900', 'Nokia Lumia 1020',
      ] },
    ],
  },
  {
    slug: 'samsung', naam: 'Samsung', tekst: 'Samsung',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'Galaxy S26 Ultra', 'Galaxy S26', 'Galaxy S25 Ultra', 'Galaxy S25', 'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23',
        'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22', 'Galaxy S21 Ultra', 'Galaxy S21+', 'Galaxy S21',
        'Galaxy S20 Ultra', 'Galaxy S20+', 'Galaxy S20', 'Galaxy S10+', 'Galaxy S10', 'Galaxy S10e',
        'Galaxy S10 Lite', 'Galaxy S9+', 'Galaxy S9', 'Galaxy S8+', 'Galaxy S8', 'Galaxy S7 edge',
        'Galaxy S7', 'Galaxy S6 edge+', 'Galaxy S6 edge', 'Galaxy S6', 'Galaxy S5', 'Galaxy S4',
        'Galaxy S3', 'Galaxy Note8', 'Galaxy Note 4', 'Galaxy A16', 'Galaxy A55', 'Galaxy A25',
        'Galaxy A15', 'Galaxy A54', 'Galaxy A24', 'Galaxy A14', 'Galaxy A53', 'Galaxy A33',
        'Galaxy A23', 'Galaxy A72', 'Galaxy A52', 'Galaxy A32', 'Galaxy A71', 'Galaxy A51',
        'Galaxy A41', 'Galaxy A21s', 'Galaxy A70', 'Galaxy A50', 'Galaxy A40', 'Galaxy A10',
        'Galaxy A8 (2018)', 'Galaxy A7 (2018)', 'Galaxy A6+', 'Galaxy A6', 'Galaxy A5 (2017)', 'Galaxy A3 (2017)',
        'Galaxy A5 (2016)', 'Galaxy A3 (2016)', 'Galaxy J7 (2017)', 'Galaxy J5 (2017)', 'Galaxy J3 (2017)', 'Galaxy A03s',
        'Galaxy A32 5G', 'Galaxy A30', 'Galaxy Note Edge', 'Galaxy Xcover', 'Galaxy Xcover 2', 'Galaxy Xcover 3',
        'Galaxy XCover 4', 'Galaxy S5 K zoom', 'Galaxy S4 zoom', 'Galaxy Mega', 'Galaxy Note 3', 'Galaxy J4 (2018)',
        'Galaxy Note 3 Neo', 'Galaxy J1', 'Galaxy J1 (2016)', 'Galaxy J1 mini', 'Galaxy Note 5', 'Galaxy J1 Ace',
        'Galaxy J2', 'Galaxy J2 (2016)', 'Galaxy Grand', 'Galaxy Grand Neo', 'Galaxy Grand Neo Plus', 'Galaxy Grand Prime',
        'Galaxy Core', 'Galaxy Core 2', 'Galaxy Alpha', 'Galaxy Core Prime', 'Galaxy Note', 'Galaxy Note II',
        'Galaxy A7 (2017)', 'Galaxy A3 (2015)', 'Galaxy J5', 'Galaxy J5 (2016)', 'Galaxy J7 (2016)', 'Galaxy S3 Neo',
        'Galaxy S3 mini', 'Galaxy J3 (2016)', 'Galaxy S5 neo', 'Galaxy S5 mini', 'Galaxy S4 mini',
      ] },
      { naam: 'Tablets', type: 'tablet', modellen: [
        'Galaxy Tab S8 Ultra', 'Galaxy Tab S8+', 'Galaxy Tab S8', 'Galaxy Tab S7+', 'Galaxy Tab S7', 'Galaxy Tab S4',
        'Galaxy Tab S3', 'Galaxy Tab S2', 'Galaxy Tab A9+', 'Galaxy Tab A9', 'Galaxy Tab A8', 'Galaxy Tab A 10.1 (2019)',
        'Galaxy Tab A 10.5', 'Galaxy Tab Pro', 'Galaxy Tab E', 'Galaxy Tab A (2016)', 'Galaxy Tab 3 7.0', 'Galaxy Tab 3 Lite',
        'Galaxy Tab 3 8.0', 'Galaxy Tab 4 7.0', 'Galaxy Tab 4 8.0', 'Galaxy Tab A 9.7', 'Galaxy Tab A 7.0 (2016)', 'Galaxy Tab S',
        'Galaxy Tab 2', 'Galaxy Tab 3',
      ] },
    ],
  },
  {
    slug: 'sony', naam: 'Sony', tekst: 'Sony',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'Xperia 1', 'Xperia 5', 'Xperia 10 Plus', 'Xperia XZ3', 'Xperia XZ2', 'Xperia XZ2 Compact',
        'Xperia XZ1', 'Xperia XZ1 Compact', 'Xperia XZ', 'Xperia XA1 Plus', 'Xperia XA1', 'Xperia XA',
        'Xperia X', 'Xperia Z5 Premium', 'Xperia Z5', 'Xperia Z5 Compact', 'Xperia Z3', 'Xperia Z3 Compact',
        'Xperia XA1 Ultra', 'Xperia C3', 'Xperia Z2', 'Xperia Z1', 'Xperia Z1 Compact', 'Xperia Z',
        'Xperia M4 Aqua', 'Xperia M2', 'Xperia Z Ultra', 'Xperia C5 Ultra',
      ] },
    ],
  },
  {
    slug: 'motorola', naam: 'Motorola', tekst: 'Motorola',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'Motorola edge 30 pro', 'Moto g51', 'Moto g31', 'Moto g9 plus', 'Moto g9 power', 'Moto g9 play',
        'Moto g8 power', 'Moto g8', 'Moto g7 power', 'Moto g7', 'Moto g7 play', 'Moto g6 plus',
        'Moto g6', 'Moto g5s plus', 'Moto g5s', 'Moto g5 plus', 'Moto g5', 'Moto g8 play',
        'Moto g4 plus', 'Moto G3', 'Moto G2', 'Moto G', 'Moto X Play', 'Moto X (2014)',
        'Moto X Style', 'Moto e4', 'Moto e4 plus', 'Moto g4',
      ] },
    ],
  },
  {
    slug: 'oneplus', naam: 'One plus', tekst: 'OnePlus',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'OnePlus 8 Pro', 'OnePlus 8', 'OnePlus 7T', 'OnePlus 7', 'OnePlus 6T', 'OnePlus 6',
        'OnePlus 5T', 'OnePlus 5', 'OnePlus 3', 'OnePlus 2', 'OnePlus X', 'OnePlus One',
      ] },
    ],
  },
  {
    slug: 'google', naam: 'Google', tekst: 'Google Pixel',
    categorieen: [
      { naam: 'Telefoons', type: 'telefoon', modellen: [
        'Google Pixel 6a', 'Google Pixel 6 Pro', 'Google Pixel 6', 'Google Pixel 5a 5G', 'Google Pixel 5', 'Google Pixel 4a',
        'Google Pixel 4', 'Google Pixel 3a', 'Google Pixel 3 XL', 'Google Pixel 3',
      ] },
    ],
  },
  {
    slug: 'xiaomi', naam: 'Xiaomi', tekst: 'Xiaomi, Redmi en POCO',
    categorieen: [
    ],
  },
  {
    slug: 'oppo', naam: 'Oppo', tekst: 'Oppo',
    categorieen: [
    ],
  },
];

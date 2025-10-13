import { HomeSectionType } from "@/interfaces/sections";

export const mockedHomeSection: HomeSectionType = {
  groupId: "home-section-1",
  name: "Featured Electronics",
  description: "Explore our curated selection of cutting-edge electronics for home and personal use.",
  shortDescription: "Top picks in electronics.",
  profileImage: [
    "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
  ],
  coverImage: [
    "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a0a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
  ],
  items: [
    {
      groupId: "subgroup-1",
      name: "Smartphones",
      description: "Latest smartphones with advanced features.",
      shortDescription: "High-performance phones.",
      profileImage: [
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      coverImage: [
        "https://images.unsplash.com/photo-1511707171634-5f897206b1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ],
      items: [
        {
          groupId: "subgroup-1-1",
          name: "Flagship Models",
          shortDescription: "Premium smartphones.",
          profileImage: [
            "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          // items: [] // No further nested items
        },
        {
          groupId: "subgroup-1-2",
          name: "Budget Phones",
          shortDescription: "Affordable yet powerful.",
          coverImage: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          ],
          profileImage: [
            "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          // items: [] // No further nested items
        },
        {
          groupId: "subgroup-1-3",
          name: "Budget Phones",
          shortDescription: "Affordable yet powerful.",
          coverImage: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          ],
          profileImage: [
            "https://images.pexels.com/photos/356055/pexels-photo-356055.jpeg?_gl=1*1eqo35v*_ga*MjA3NTY4ODIzNi4xNzYwMzk0NTUz*_ga_8JE65Q40S6*czE3NjAzOTQ1NTMkbzEkZzEkdDE3NjAzOTQ4ODckajQ3JGwwJGgw"
          ],
          // items: [] // No further nested items
        }
      ]
    },
    {
      groupId: "subgroup-2",
      name: "Laptops",
      description: "High-performance laptops for work and play.",
      shortDescription: "Top laptops for all needs.",
      profileImage: [
        "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      coverImage: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ],
      items: [
        {
          groupId: "subgroup-2-1",
          name: "Gaming Laptops",
          shortDescription: "Laptops for gamers.",
          profileImage: [
            "https://images.pexels.com/photos/19845610/pexels-photo-19845610.jpeg?_gl=1*9003bb*_ga*MjA3NTY4ODIzNi4xNzYwMzk0NTUz*_ga_8JE65Q40S6*czE3NjAzOTQ1NTMkbzEkZzEkdDE3NjAzOTQ2MjIkajU5JGwwJGgw"
          ],
          // items: [] // No further nested items
        }
      ]
    },
    {
      groupId: "subgroup-3",
      name: "Tablets",
      description: "Versatile tablets for productivity and entertainment.",
      shortDescription: "Portable and powerful tablets.",
      profileImage: [
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      coverImage: [
        "https://images.unsplash.com/photo-1544244015-1a3191710a84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ],
      items: [
        {
          groupId: "subgroup-3-1",
          name: "Premium Tablets",
          shortDescription: "High-end tablets for professionals.",
          profileImage: [
            "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          // items: []
        }
      ]
    },
    {
      groupId: "subgroup-4",
      name: "Smart Watches",
      description: "Stay connected with the latest smart watches.",
      shortDescription: "Wearable tech for all.",
      profileImage: [
        "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      coverImage: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ],
      items: [
        {
          groupId: "subgroup-4-1",
          name: "Fitness Trackers",
          shortDescription: "Track your health and fitness.",
          profileImage: [
            "https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          // items: []
        }
      ]
    },
    {
      groupId: "subgroup-5",
      name: "Audio Devices",
      description: "Immersive audio experiences with headphones and speakers.",
      shortDescription: "Top audio gear.",
      profileImage: [
        "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      coverImage: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ],
      items: [
        {
          groupId: "subgroup-5-1",
          name: "Wireless Headphones",
          shortDescription: "Crystal-clear sound on the go.",
          profileImage: [
            "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          // items: []
        }
      ]
    },
    {
      groupId: "subgroup-6",
      name: "Cameras",
      description: "Capture every moment with high-quality cameras.",
      shortDescription: "Professional and compact cameras.",
      profileImage: [
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      coverImage: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ],
      items: [
        {
          groupId: "subgroup-6-1",
          name: "Mirrorless Cameras",
          shortDescription: "Lightweight and powerful cameras.",
          profileImage: [
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          // items: []
        }
      ]
    }
  ]
};


 export const sneakersSection: HomeSectionType = {
    groupId: "fashion_sneakers",
    name: "Sneakers",
    description: "Trending sneakers collection for men and women",
    shortDescription: "Your go-to sneaker hub",
    profileImage: [
      "https://images.unsplash.com/photo-1600180758899-fc7a2f82edbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coverImage: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2529145/pexels-photo-2529145.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    items: [
      {
        groupId: "mens_sneakers",
        name: "Men’s Sneakers",
        description: "Cool and classic styles for men",
        shortDescription: "Men’s kicks",
        profileImage: [
          "https://images.unsplash.com/photo-1585386959984-a415522eed25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        coverImage: [
          "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        items: [
          {
            groupId: "mens_nike",
            name: "Nike",
            description: "Men’s Nike sneaker line",
            shortDescription: "Nike men",
            profileImage: [
              "https://images.unsplash.com/photo-1574905295304-6b3666ce296f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            coverImage: [
              "https://images.pexels.com/photos/2529156/pexels-photo-2529156.jpeg?auto=compress&cs=tinysrgb&w=1200"
            ],
            // items: [
            //   {
            //     groupId: "nike_air_max",
            //     name: "Nike Air Max",
            //     description: "Air Max models and variants",
            //     shortDescription: "Air Max",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1536305038536-ccd7937cfa05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []  // deepest level, no further nested groups
            //   },
            //   {
            //     groupId: "nike_air_force",
            //     name: "Nike Air Force",
            //     description: "Air Force sneaker series",
            //     shortDescription: "Air Force",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1600180758899-fc7a2f82edbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []
            //   }
            // ]
          },
          {
            groupId: "mens_adidas",
            name: "Adidas",
            description: "Men’s Adidas sneakers",
            shortDescription: "Adidas men",
            profileImage: [
              "https://images.unsplash.com/photo-1595950655638-6f71b1f0e041?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            coverImage: [
              "https://images.pexels.com/photos/2529140/pexels-photo-2529140.jpeg?auto=compress&cs=tinysrgb&w=1200"
            ],
            // items: [
            //   {
            //     groupId: "adidas_ultraboost",
            //     name: "Adidas Ultraboost",
            //     description: "Ultraboost performance sneaker",
            //     shortDescription: "Ultraboost",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []
            //   },
            //   {
            //     groupId: "adidas_nmd",
            //     name: "Adidas NMD",
            //     description: "Adidas NMD street style",
            //     shortDescription: "NMD",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1552345381-5e3f77abd92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/2529136/pexels-photo-2529136.jpeg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []
            //   }
            // ]
          }
        ]
      },
      {
        groupId: "womens_sneakers",
        name: "Women’s Sneakers",
        description: "Fashion and athletic styles for women",
        shortDescription: "Women’s kicks",
        profileImage: [
          "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        coverImage: [
          "https://images.pexels.com/photos/298867/pexels-photo-298867.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        items: [
          {
            groupId: "womens_puma",
            name: "Puma",
            description: "Women’s Puma sneakers",
            shortDescription: "Puma women",
            profileImage: [
              "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            coverImage: [
              "https://images.pexels.com/photos/2529151/pexels-photo-2529151.jpeg?auto=compress&cs=tinysrgb&w=1200"
            ],
            // items: [
            //   {
            //     groupId: "puma_cali",
            //     name: "Puma Cali",
            //     description: "Puma Cali lifestyle sneaker",
            //     shortDescription: "Cali",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1586880244406-41a97d41c180?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/2529152/pexels-photo-2529152.jpeg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []
            //   },
            //   {
            //     groupId: "puma_future",
            //     name: "Puma Future",
            //     description: "Puma Future athletic sneaker",
            //     shortDescription: "Future",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/2529153/pexels-photo-2529153.jpeg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []
            //   }
            // ]
          },
          {
            groupId: "womens_newbalance",
            name: "New Balance",
            description: "Women’s New Balance sneakers",
            shortDescription: "NB women",
            profileImage: [
              "https://images.unsplash.com/photo-1552345381-5e3f77abd92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            coverImage: [
              "https://images.pexels.com/photos/2529138/pexels-photo-2529138.jpeg?auto=compress&cs=tinysrgb&w=1200"
            ],
            // items: [
            //   {
            //     groupId: "nb_550",
            //     name: "New Balance 550",
            //     description: "Classic NB 550 sneaker",
            //     shortDescription: "NB 550",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1595950655638-6f71b1f0e041?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/2529141/pexels-photo-2529141.jpeg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []
            //   },
            //   {
            //     groupId: "nb_327",
            //     name: "New Balance 327",
            //     description: "New Balance 327 vintage style",
            //     shortDescription: "NB 327",
            //     profileImage: [
            //       "https://images.unsplash.com/photo-1587380556104-622d46ab87e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            //     ],
            //     coverImage: [
            //       "https://images.pexels.com/photos/2529142/pexels-photo-2529142.jpeg?auto=compress&cs=tinysrgb&w=1200"
            //     ],
            //     items: []
            //   }
            // ]
          }
        ]
      }
    ]
  };
  
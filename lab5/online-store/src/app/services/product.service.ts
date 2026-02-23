import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Smartphones' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Headphones' },
      { id: 4, name: 'Gaming' }
    ];
  }

  getProducts(): Product[] {
    return [
      // Smartphones (categoryId: 1)
      {
        id: 1,
        name: 'Apple iPhone 15 128GB Black',
        description: 'Apple iPhone 15 with a 6.1-inch Super Retina XDR display and A16 Bionic chip. Features a 48MP main camera and USB-C connectivity for modern performance.',
        price: 408949,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 256GB Black',
        description: 'Samsung Galaxy S24 with a 6.2-inch Dynamic AMOLED 2X display and Snapdragon 8 Gen 3 processor. AI-powered camera system with 50MP main sensor.',
        price: 328740,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0c/p7d/1610307.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfe/p76/1610320.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      {
        id: 3,
        name: 'Xiaomi 14 Pro 512GB Black',
        description: 'Xiaomi 14 Pro features the Snapdragon 8 Gen 3 processor and a Leica-tuned triple camera system. The 6.73-inch AMOLED display supports 120Hz refresh rate.',
        price: 150000,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214848.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/p78/23145244.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/p78/23145244.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4d/p79/23145247.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      {
        id: 4,
        name: 'Apple iPhone 14 128GB Blue',
        description: 'iPhone 14 features the powerful A15 Bionic chip and an advanced dual-camera system. The 6.1-inch Super Retina XDR display delivers stunning visuals.',
        price: 479000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h15/86042945683486.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h5c/hb7/86042945716254.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h76/h53/86042945749022.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8c/86042945781790.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-nanosim-esim-goluboi-106363150/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      {
        id: 5,
        name: 'Samsung Galaxy A55 256GB Black',
        description: 'Samsung Galaxy A55 features a 6.6-inch Super AMOLED display and a 50MP triple camera. Powered by Exynos 1480 with 8GB RAM for smooth multitasking.',
        price: 289999,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h44/hea/85661498261534.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h96/h5b/85428899545118.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
        likes: 0,
        categoryId: 1
      },

      // Laptops (categoryId: 2)
      {
        id: 6,
        name: 'Apple MacBook Air 13 M1 8GB 256GB',
        description: 'MacBook Air powered by Apple M1 chip with an 8-core CPU and 7-core GPU. Ultra-thin design with a 13.3-inch Retina display and up to 18 hours of battery life.',
        price: 389990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 7,
        name: 'ASUS VivoBook 15 Intel i5 16GB 512GB',
        description: 'ASUS VivoBook 15 with Intel Core i5 processor and 16GB RAM for efficient multitasking. Features a 15.6-inch Full HD display and 512GB SSD storage.',
        price: 398815,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h98/85775243247646.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h89/h93/85775243313182.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/he5/h06/85775243378718.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hbf/hda/85775243444254.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-24-gb-ssd-1000-gb-win-11-pro-x1504za-bq1105zw-90nb1022-mzw1m0-118395132/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 8,
        name: 'Lenovo IdeaPad 3 Ryzen 5 8GB 512GB',
        description: 'Lenovo IdeaPad 3 powered by AMD Ryzen 5 processor with 8GB RAM. Includes a 15.6-inch Full HD anti-glare display and fast 512GB SSD.',
        price: 248990,
        rating: 4.3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/pc2/10847918.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p31/pc5/10847921.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p69/pc5/10847923.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc5/10847925.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15amn8-15-6-8-gb-ssd-512-gb-win-11-82xq00lrrk-130761798/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 9,
        name: 'HP Pavilion 15 Intel i7 16GB 512GB',
        description: 'HP Pavilion 15 with Intel Core i7 and NVIDIA GeForce MX550 graphics card. The 15.6-inch IPS display and backlit keyboard make it ideal for work and study.',
        price: 599990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/hc0/86367571968030.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd6/hc4/86367572000798.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p5e/p43/79698998.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h1b/h15/65576732262430.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-bez-os-15-eg2012ci-6g7z7ea-107524976/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 10,
        name: 'Apple MacBook Pro 14 M3 8GB 512GB',
        description: 'MacBook Pro 14 with M3 chip delivers exceptional performance for professional workflows. Features a stunning Liquid Retina XDR display with ProMotion technology.',
        price: 1112220,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p92/pa0/17666425.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3c/hf5/85154533810206.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3c/hf5/85154533810206.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3-137221010/',
        likes: 0,
        categoryId: 2
      },

      // Headphones (categoryId: 3)
      {
        id: 11,
        name: 'Apple AirPods Pro 2nd Gen',
        description: 'AirPods Pro with Active Noise Cancellation and Adaptive Audio for immersive sound. Features Transparency mode, Personalized Spatial Audio, and up to 30 hours battery with case.',
        price: 105990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      {
        id: 12,
        name: 'Sony WH-1000XM5 Black',
        description: 'Sony WH-1000XM5 with industry-leading noise cancellation and 30-hour battery life. Features multipoint connection and crystal-clear hands-free calling.',
        price: 134487,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      {
        id: 13,
        name: 'Samsung Galaxy Buds2 Pro White',
        description: 'Galaxy Buds2 Pro deliver Hi-Fi sound with intelligent Active Noise Cancellation. Ergonomic design ensures a comfortable fit for extended listening sessions.',
        price: 54985,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/hea/86487570219038.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h40/h89/86487570350110.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/ha0/h05/86487570415646.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h17/h8c/86487570546718.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-belyi-121199005/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      {
        id: 14,
        name: 'JBL Tune 770NC Black',
        description: 'JBL Tune 770NC features Adaptive Noise Cancelling and JBL Pure Bass Sound. Up to 70 hours of battery life with ANC off keeps you listening all day.',
        price: 33372,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h5e/h26/82294170779678.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8c/h44/84686766129182.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      {
        id: 15,
        name: 'Apple AirPods 3rd Gen',
        description: 'AirPods 3rd generation feature Spatial Audio with dynamic head tracking for immersive sound. Sweat and water resistant with up to 30 hours total battery life.',
        price: 60965,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
        likes: 0,
        categoryId: 3
      },

      // Gaming (categoryId: 4)
      {
        id: 16,
        name: 'Sony PlayStation 5 Slim',
        description: 'PlayStation 5 Slim with custom AMD GPU delivering 4K gaming at up to 120fps. Includes DualSense wireless controller with haptic feedback and adaptive triggers.',
        price: 299990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
        likes: 0,
        categoryId: 4
      },
      {
        id: 17,
        name: 'Xbox Series X 1TB Black',
        description: 'Xbox Series X delivers 4K gaming at 60fps and up to 120fps with DirectX raytracing. The 1TB custom NVMe SSD dramatically reduces load times.',
        price: 429094,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hc8/h77/63982144585758.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h02/h0e/63982148255774.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h35/hce/63982150615070.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000',
        likes: 0,
        categoryId: 4
      },
      {
        id: 18,
        name: 'Nintendo Switch OLED White',
        description: 'Nintendo Switch OLED model features a vibrant 7-inch OLED screen and enhanced audio. Play at home on TV or take it anywhere in handheld mode.',
        price: 183949,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-medium',
        images: [
        ],
        link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000',
        likes: 0,
        categoryId: 4
      },
      {
        id: 19,
        name: 'Sony DualSense PS5 Controller White',
        description: 'DualSense wireless controller features haptic feedback and adaptive triggers for immersive gameplay. Built-in microphone and headset jack for seamless communication.',
        price: 54927,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/pf9/34378156.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pe1/pf9/34378157.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pc5/pf9/34378158.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pa9/pf9/34378159.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/siee-ps5-dualsense-controller-chroma-pearl-belyi-130085199/?c=750000000',
        likes: 0,
        categoryId: 4
      },
      {
        id: 20,
        name: 'Razer DeathAdder V3 Gaming Mouse',
        description: 'Razer DeathAdder V3 features the Focus Pro 30K optical sensor for precise tracking. Ultra-lightweight design at 59g with ergonomic shape for extended gaming sessions.',
        price: 41800,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/haa/hb6/80806103187486.jpg?format=gallery-medium',
        images: [
        ],
        link: 'https://kaspi.kz/shop/p/razer-deathadder-v3-chernyi-110399604/?c=750000000',
        likes: 0,
        categoryId: 4
      }
    ];
  }
}

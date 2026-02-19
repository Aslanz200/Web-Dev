import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Apple iPhone 15 128GB Black',
        description: 'Apple iPhone 15 with a 6.1-inch Super Retina XDR display and A16 Bionic chip. Features a 48MP main camera and USB-C connectivity for modern performance.',
        price: 379990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000'
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 256GB Black',
        description: 'Samsung Galaxy S24 with a 6.2-inch Dynamic AMOLED 2X display and Snapdragon 8 Gen 3 processor. AI-powered camera system with 50MP main sensor.',
        price: 329990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p0c/p7d/1610307.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0c/p7d/1610307.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfe/p76/1610320.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000'
      },
      {
        id: 3,
        name: 'Apple MacBook Air 13 M1 8GB 256GB',
        description: 'MacBook Air powered by Apple M2 chip with an 8-core CPU and 8-core GPU. Ultra-thin design with a 13.6-inch Liquid Retina display and up to 18 hours of battery life.',
        price: 589990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000'
      },
      {
        id: 4,
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
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
      },
      {
        id: 5,
        name: 'Samsung 65" QLED 4K Smart TV Q80C',
        description: 'Samsung 65-inch QLED TV with Quantum Dot technology and 4K resolution. Features Quantum HDR+, Motion Xcelerator 120Hz, and built-in Tizen OS.',
        price: 449990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/hdf/85888051478558.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p35/pfd/84396300Cool.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb3/h0b/85888051544094.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h31/h39/85888051609630.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-ue65du7100uxce-165-sm-chernyi-118908115/?c=750000000'
      },
      {
        id: 6,
        name: 'Apple AirPods Pro 2nd Gen',
        description: 'AirPods Pro with Active Noise Cancellation and Adaptive Audio for immersive sound. Features Transparency mode, Personalized Spatial Audio, and up to 30 hours battery with case.',
        price: 149990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
      },
      {
        id: 7,
        name: 'Xiaomi Robot Vacuum Cleaner X10+',
        description: 'Xiaomi X10+ robot vacuum with 4000Pa suction power and laser navigation for precise room mapping. Features auto-emptying base station and mopping function.',
        price: 219990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/pd6/6400041.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p17/pd6/6400042.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfb/pd5/6400043.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pdf/pd5/6400044.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-bhr6068eu-belyi-109460319/?c=750000000'
      },
      {
        id: 8,
        name: 'Dyson V15 Detect Absolute',
        description: 'Dyson V15 cordless vacuum with laser dust detection that reveals microscopic particles. Features 240AW suction and intelligent auto mode that adapts power to floor type.',
        price: 329990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pdc/p32/77965057.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/p32/77965058.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p75/p00/68409016.bin?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
      },
      {
        id: 9,
        name: 'Nike Air Max 270 React',
        description: 'Nike Air Max 270 React with a full-length React foam midsole for lightweight cushioning. Iconic 270-unit Air heel provides maximum comfort for all-day wear.',
        price: 59990,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pec/p2d/72581118.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p74/p30/72581120.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p90/p30/72581121.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pc9/p30/72581123.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/krossovki-nike-air-max-270-ah8050-005-chernyi-42-148001581/?c=750000000'
      },
      {
        id: 10,
        name: 'Nespresso Vertuo Next Coffee Machine',
        description: 'Nespresso Vertuo Next brews five cup sizes from espresso to Alto using Centrifusion technology. Fast 30-second heat-up time and automatic capsule ejection for easy cleaning.',
        price: 89990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h29/63927050698782.jpg?format=gallery-medium',
        images: [
          
        ],
        link: 'https://kaspi.kz/shop/p/kofemashina-nespresso-gcb2-vertuo-plus-c-belyi-100562113/?c=750000000'
      }
    ];
  }
}

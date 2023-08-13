import { imagesLumar70ft } from './lumar70ft'
import { imagesAdonis80ft } from './adonis_80ft'
import { imagesAxoparBrabus40ft } from './axopar_brabus40ft'
import { imagesAbsolute60ft } from './absolute_60ft'
import { imagesAzimut55ft } from './azimut_55ft'
import { imagesAzimut52ft } from './azimut_52ft'
import { imagesCruiser45ft } from './cruiser_45ft'
import { imagesCruiserSport50ft } from './cruiser_sport_50ft'
import { imagesEscapaSilverton50ft } from './escapa_silverton_50ft'
import { imagesIcon65ft } from './icon_65ft'
import { imagesLeopard119ft } from './leopard_119ft'
import { imagesMarques70ft } from './marques_70ft'
import { imagesNimbus31ft } from './nimbus_31ft'
import { imagesNewPage75ft } from './new_page75gt'
import { imagesRegal90ft } from './regal_90ft'
import { imagesSeaRaySundancer38ft } from './sea_ray_sundancer38ft'
import { imagesSeaRay50ft } from './sea_ray50ft'
import { imagesSeaRay52ft } from './sea_ray52ft'
import { imagesSeaRaySedanFly48ft } from './sea_ray_sedan_fly_48ft'
import { imagesSeaRaySundancer50ft } from './sea_ray_sundancer50ft'
import { imagesSundancerSport60ft } from './sundancer_sport60ft'
import { imagesSunseeker65ft } from './sunseeker65ft'
import { imagesSunseeker80ft } from './sunseeker80ft'
import { imagesSunseekerPreadator80ft } from './sunseeker_predator_80ft'
import { imagesThales } from './thales'
import { imagesViking } from './viking'
import { imagesYamaha } from './yamaha_ar25ft'
import { imagesTransportation } from './transportation'
import { imagesMercedesBenz } from './m_benz'
import { imagesWaveRunner } from './wave_runner'
import { imagesJetCar } from './jetcar'
import { imagesBlackMonterrey27ft } from './black_monterrey27ft'
import { imagesPardo38ft } from './pardo_38ft'
import { imagesSunseekerV280ft } from './sunseeker_v280ft'

export const data = {
  yachts: [
    {
      itemName: 'Azimut 50ft',
      category: 'yachts',
      url: 'azimut_50ft',
      description:
        'Azimut 50ft available 4 hours $1700 Includes:captain, mate ,cooler, Bluetooth speakers,floating Matt and 1 jetski 1 hour free',
      location: '',
      mainImage: imagesAzimut52ft.img1,
      price: '1700',
      prices: [
        {
          price: '1700',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers', '1 jetski for 1 hour'],
      gallery: [
        imagesAzimut52ft.img1,
        imagesAzimut52ft.img2,
        imagesAzimut52ft.img3,
        imagesAzimut52ft.img4,
        imagesAzimut52ft.img5,
      ],
    },
    {
      itemName: 'Azimut 57ft',
      category: 'yachts',
      url: 'azimut_57ft',
      description:
        'Azumit 57ft 4 hours $1800. Includes:captain, mate ,cooler, Bluetooth speakers,floating Matt and 1 jetski 1 hour free. Location: Miami Beach',
      location: 'Miami Beach',
      mainImage: imagesThales.img1,
      price: '1800',
      prices: [
        {
          price: '1800',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers', '1 jetski for 1 hour'],
      gallery: [
        imagesThales.img1,
        imagesThales.img2,
        imagesThales.img3,
        imagesThales.img4,
        imagesThales.img5,
        imagesThales.img6,
        imagesThales.img7,
      ],
    },
    {
      itemName: 'Cruiser 50 ft fly bridge',
      category: 'yachts',
      url: 'cruiser_sport_45ft',
      description:
        'Cruiser 50 ft fly bridge. Summer special: Monday-Friday 3 hours $899-4 hours $1100-weekends 4 hours $1400 Includes:captain, mate, gas and floating Matt. location: Miami Beach',
      location: 'Miami Beach',
      mainImage: imagesCruiserSport50ft.img1,
      price: '899',
      prices: [
        {
          price: '899',
          time: '4',
          days: 'Monday - Friday',
        },
        {
          price: '1100',
          time: '4',
          days: 'Weekends',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesCruiserSport50ft.img1,
        imagesCruiserSport50ft.img2,
        imagesCruiserSport50ft.img3,
        imagesCruiserSport50ft.img4,
        imagesCruiserSport50ft.img5,
      ],
    },
    {
      itemName: 'Sea Ray Sedan Fly 48ft',
      category: 'yachts',
      url: 'sea_ray_sedan_fly_48ft',
      description:
        'Sea ray sedan bridge 48 ft summer special: Monday-Thursday $999 Weekends $1200 Location: Miami Beach Includes: captain,mate,gas and floating Matt!',
      location: 'Miami Beach',
      mainImage: imagesSeaRaySedanFly48ft.img2,
      price: '999',
      prices: [
        {
          price: '999',
          time: '',
          days: 'Monday - Thursday',
        },
        {
          price: '1200',
          time: '',
          days: 'Weekends',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesSeaRaySedanFly48ft.img1,
        imagesSeaRaySedanFly48ft.img2,
        imagesSeaRaySedanFly48ft.img3,
        imagesSeaRaySedanFly48ft.img4,
        imagesSeaRaySedanFly48ft.img5,
        imagesSeaRaySedanFly48ft.img6,
        imagesSeaRaySedanFly48ft.img7,
      ],
    },
    {
      itemName: 'Sunseeker 80ft Sliptease',
      category: 'yachts',
      url: 'sunseeker_80ft_sliptease',
      description:
        'Sunseeker 80ft 4 hour $2800. Includes: captain, mate , cooler, Bluetooth speakers, floating Matt and 1 jetski 1 hour FREE',
      location: 'Miami Downtown',
      mainImage: imagesSunseekerV280ft.img1,
      price: '2800',
      prices: [
        {
          price: '2800',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'bluetooth speakers', 'cooler', '1 jetskies for 1 hour'],
      gallery: [
        imagesSunseekerV280ft.img1,
        imagesSunseekerV280ft.img2,
        imagesSunseekerV280ft.img3,
        imagesSunseekerV280ft.img4,
        imagesSunseekerV280ft.img5,
        imagesSunseekerV280ft.img6,
        imagesSunseekerV280ft.img7,
        imagesSunseekerV280ft.img8,
      ],
    },
    {
      itemName: 'Absolute 60ft',
      category: 'yachts',
      url: 'absolute_60ft',
      description:
        'Absolute 60ft available 4 hours $2500 Location: Miami Beach. Includes:captain, mate ,cooler, Bluetooth speakers,floating Matt and 1 jetski 1 hour free',
      location: 'Miami Beach',
      mainImage: imagesAbsolute60ft.img1,
      price: '2500',
      prices: [
        {
          price: '2500',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers', '1 jetski for 1 hour'],
      gallery: [
        imagesAbsolute60ft.img1,
        imagesAbsolute60ft.img2,
        imagesAbsolute60ft.img3,
        imagesAbsolute60ft.img4,
        imagesAbsolute60ft.img5,
      ],
    },
    {
      itemName: 'Adonis 80ft',
      category: 'yachts',
      url: 'adonis_80ft',
      description: 'Adonis 80 ft available 4 hours $5000 Includes : captain, mate, gas, floating Matt.',
      location: '',
      mainImage: imagesAdonis80ft.img1,
      price: '5000',
      prices: [
        {
          price: '5000',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesAdonis80ft.img1,
        imagesAdonis80ft.img2,
        imagesAdonis80ft.img3,
        imagesAdonis80ft.img4,
        imagesAdonis80ft.img5,
        imagesAdonis80ft.img6,
        imagesAdonis80ft.img7,
        imagesAdonis80ft.img8,
        imagesAdonis80ft.img9,
        imagesAdonis80ft.img10,
      ],
    },
    {
      itemName: 'Axopar Brabus 40ft',
      category: 'yachts',
      url: 'axopar_brabus_40ft',
      description: 'Only $1500. Includes: captain, mate, gas and floating Matt. Location: Miami Beach',
      location: 'Miami Beach',
      mainImage: imagesAxoparBrabus40ft.img1,
      price: '1500',
      prices: [
        {
          price: '1500',
          time: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '2 jetskies for 1 hour'],
      gallery: [
        imagesAxoparBrabus40ft.img1,
        imagesAxoparBrabus40ft.img2,
        imagesAxoparBrabus40ft.img3,
        imagesAxoparBrabus40ft.img4,
        imagesAxoparBrabus40ft.img5,
      ],
    },
    {
      itemName: 'Azimut 55ft',
      category: 'yachts',
      url: 'azimut_55ft',
      description:
        'Monday - Friday $1700. Weekends $1900. Includes: captain, mate, gas, floating Matt and jetski for 1 hour. Location: Miamy Beach',
      location: 'Miami Beach',
      mainImage: imagesAzimut55ft.img1,
      price: '1700',
      prices: [
        {
          price: '1700',
          time: '',
          days: 'Monday - Friday',
        },
        {
          price: '1900',
          time: '',
          days: 'Weekends',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'jetski for 1 hour'],
      gallery: [
        imagesAzimut55ft.img1,
        imagesAzimut55ft.img2,
        imagesAzimut55ft.img3,
        imagesAzimut55ft.img4,
        imagesAzimut55ft.img5,
        imagesAzimut55ft.img6,
        imagesAzimut55ft.img7,
        imagesAzimut55ft.img8,
      ],
    },
    {
      itemName: 'Black Monterrey 27ft',
      category: 'yachts',
      url: 'black_monterrey_57ft',
      description: '4 hours $625. Includes: captain, gas, Bluetooth speakers and cooler',
      location: '',
      mainImage: imagesBlackMonterrey27ft.img1,
      price: '625',
      prices: [
        {
          price: '625',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Captain', 'Gas', 'Cooler', 'Bluetooth speakers'],
      gallery: [
        imagesBlackMonterrey27ft.img1,
        imagesBlackMonterrey27ft.img2,
        imagesBlackMonterrey27ft.img3,
        imagesBlackMonterrey27ft.img4,
        imagesBlackMonterrey27ft.img5,
        imagesBlackMonterrey27ft.img6,
        imagesBlackMonterrey27ft.img7,
        imagesBlackMonterrey27ft.img8,
        imagesBlackMonterrey27ft.img9,
        imagesBlackMonterrey27ft.img10,
      ],
    },
    {
      itemName: 'Cruiser 45ft',
      category: 'yachts',
      url: 'cruiser_45ft',
      description:
        'Monday-Friday 4 hours $899. Weekends 4 hours $999. Includes: captain, mate ,gas, floating Matt and 1 jetski for 1 hour! Location: Miami River 5 star location.',
      location: 'Miami River',
      mainImage: imagesCruiser45ft.img1,
      price: '899',
      prices: [
        {
          price: '899',
          time: '4',
          days: 'Monday - Friday',
        },
        {
          price: '999',
          time: '4',
          days: 'Weekends',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'jetski for 1 hour'],
      gallery: [
        imagesCruiser45ft.img1,
        imagesCruiser45ft.img2,
        imagesCruiser45ft.img3,
        imagesCruiser45ft.img4,
        imagesCruiser45ft.img5,
        imagesCruiser45ft.img6,
        imagesCruiser45ft.img7,
      ],
    },
    {
      itemName: 'Escápa Silverton 50ft',
      category: 'yachts',
      url: 'escapa_silverton_50ft',
      description:
        'Escápa Silverton 50ft available 4 hours $1200 Includes: captain,mate,gas,cooler, and floating Matt ',
      location: '',
      mainImage: imagesEscapaSilverton50ft.img1,
      price: '1200',
      prices: [
        {
          price: '1200',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesEscapaSilverton50ft.img1,
        imagesEscapaSilverton50ft.img2,
        imagesEscapaSilverton50ft.img3,
        imagesEscapaSilverton50ft.img4,
        imagesEscapaSilverton50ft.img5,
        imagesEscapaSilverton50ft.img6,
        imagesEscapaSilverton50ft.img7,
        imagesEscapaSilverton50ft.img8,
        imagesEscapaSilverton50ft.img9,
        imagesEscapaSilverton50ft.img10,
      ],
    },
    {
      itemName: 'Icon 65ft',
      category: 'yachts',
      url: 'icon_65ft',
      description:
        'Icon 65ft 4 hours $2000. Includes:captain, mate ,cooler, Bluetooth speakers,floating Matt and 1 jetski 1 hour free',
      location: '',
      mainImage: imagesIcon65ft.img1,
      price: '2000',
      prices: [
        {
          price: '2000',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers', '1 jetski for 1 hour'],
      gallery: [imagesIcon65ft.img1, imagesIcon65ft.img2, imagesIcon65ft.img3],
    },
    {
      itemName: 'Leopardo 119ft',
      category: 'yachts',
      url: 'leopardo_119ft',
      description:
        'Leopardo 119ft available now for only $5500! Includes: captain, mate, floating Matt, gas and 2 jetskies for 1 hour ! Location:Downtown miami',
      location: 'Downtown Miami',
      mainImage: imagesLeopard119ft.img1,
      price: '5500',
      prices: [
        {
          price: '5500',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '2 jetskies for 1 hour'],
      gallery: [
        imagesLeopard119ft.img1,
        imagesLeopard119ft.img2,
        imagesLeopard119ft.img3,
        imagesLeopard119ft.img4,
        imagesLeopard119ft.img5,
        imagesLeopard119ft.img6,
      ],
    },
    {
      itemName: 'Lumar 70ft',
      category: 'yachts',
      url: 'lumar_70ft',
      description:
        '4d hours $2.500 all in! Includes: captain, mate, gas, floating Matt and 2 jetskies for 1 hour. Location: Miami River',
      location: 'Miami River',
      mainImage: imagesLumar70ft.img1,
      price: '2500',
      prices: [
        {
          price: '2500',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '2 jetskies for 1 hour'],
      gallery: [
        imagesLumar70ft.img1,
        imagesLumar70ft.img2,
        imagesLumar70ft.img3,
        imagesLumar70ft.img4,
        imagesLumar70ft.img5,
        imagesLumar70ft.img6,
        imagesLumar70ft.img7,
      ],
    },
    {
      itemName: 'Marques 70ft',
      category: 'yachts',
      url: 'marques_70ft',
      description:
        'Marques 70ft 4 hours $3700 Includes:captain, mate ,cooler, Bluetooth speakers,floating Matt and 1 jetski 1 hour free',
      location: '',
      mainImage: imagesMarques70ft.img1,
      price: '3700',
      prices: [
        {
          price: '3700',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers', '1 jetski for 1 hour'],
      gallery: [
        imagesMarques70ft.img1,
        imagesMarques70ft.img2,
        imagesMarques70ft.img3,
        imagesMarques70ft.img4,
        imagesMarques70ft.img5,
        imagesMarques70ft.img6,
      ],
    },
    {
      itemName: 'Nimbus "Sassy Girl" 31ft',
      category: 'yachts',
      url: 'nimbus_sassy_girl_31ft',
      description: '4 hours $1000 Includes: captain, gas , marina fee and floating Matt. Location: downtown Miami ',
      location: 'Downtown Miami',
      mainImage: imagesNimbus31ft.img1,
      price: '1000',
      prices: [
        {
          price: '1000',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Marina Fee'],
      gallery: [
        imagesNimbus31ft.img1,
        imagesNimbus31ft.img2,
        imagesNimbus31ft.img3,
        imagesNimbus31ft.img4,
        imagesNimbus31ft.img5,
        imagesNimbus31ft.img6,
      ],
    },
    {
      itemName: 'Pardo 38ft',
      category: 'yachts',
      url: 'pardo_38ft',
      description:
        '38 FEET PARDO 2022 “SHINING FORCE » 4 hours $2000. All included up to 13 ppl Water ice soda, Towels not included',
      location: '',
      mainImage: imagesPardo38ft.img1,
      price: '2000',
      prices: [
        {
          price: '2000',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers'],
      gallery: [
        imagesPardo38ft.img1,
        imagesPardo38ft.img2,
        imagesPardo38ft.img3,
        imagesPardo38ft.img4,
        imagesPardo38ft.img5,
        imagesPardo38ft.img6,
        imagesPardo38ft.img7,
        imagesPardo38ft.img8,
        imagesPardo38ft.img9,
        imagesPardo38ft.img10,
      ],
    },
    {
      itemName: 'Regal 90ft',
      category: 'yachts',
      url: 'regal_90ft',
      description:
        'Regal 90 ft available 4 hours $4500 Includes: captain, mate, gas and floating Matt and 1 jetski for 1 hour .',
      location: '',
      mainImage: imagesRegal90ft.img1,
      price: '4500',
      prices: [
        {
          price: '4500',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Jetski for 1 hour'],
      gallery: [
        imagesRegal90ft.img1,
        imagesRegal90ft.img2,
        imagesRegal90ft.img3,
        imagesRegal90ft.img4,
        imagesRegal90ft.img5,
      ],
    },
    {
      itemName: 'Sea Ray Sundancer 38ft',
      category: 'yachts',
      url: 'sea_ray_sundancer_38ft',
      description:
        'Sea ray Sundancer 38ft 4 hours $850. Includes: captain, gas, cooler, Bluetooth speakers and floating matt',
      location: '',
      mainImage: imagesSeaRaySundancer38ft.img1,
      price: '850',
      prices: [
        {
          price: '850',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers'],
      gallery: [
        imagesSeaRaySundancer38ft.img1,
        imagesSeaRaySundancer38ft.img2,
        imagesSeaRaySundancer38ft.img3,
        imagesSeaRaySundancer38ft.img4,
      ],
    },
    {
      itemName: 'Sea Ray 50ft',
      category: 'yachts',
      url: 'sea_ray_50ft',
      description:
        '4 hours &1500 all in. Includes: captain, mate, gas floating Matt & 1 jetski 1/h location: Miami Beach',
      location: 'Miami Beach',
      mainImage: imagesSeaRay50ft.img1,
      price: '1500',
      prices: [
        {
          price: '1500',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '1 jetski for 1 hour'],
      gallery: [
        imagesSeaRay50ft.img1,
        imagesSeaRay50ft.img2,
        imagesSeaRay50ft.img3,
        imagesSeaRay50ft.img4,
        imagesSeaRay50ft.img5,
      ],
    },
    {
      itemName: 'Sea Ray 52ft',
      category: 'yachts',
      url: 'sea_ray_52ft',
      description:
        '4 hours &1500 all in. Includes: captain, mate, gas floating Matt & 1 jetski 1/h location: Miami Beach',
      location: 'Miami Beach',
      mainImage: imagesSeaRay52ft.img2,
      price: '1500',
      prices: [
        {
          price: '1500',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '1 jetski for 1 hour'],
      gallery: [
        imagesSeaRay52ft.img1,
        imagesSeaRay52ft.img2,
        imagesSeaRay52ft.img3,
        imagesSeaRay52ft.img4,
        imagesSeaRay52ft.img5,
      ],
    },
    {
      itemName: 'Sea Ray Sundancer 50ft',
      category: 'yachts',
      url: 'sea_ray_sundancer_50ft',
      description:
        'Searay Sundancer 50ft available 4 hours $1450 Includes: captain , mate , cooler ,floating Matt and 1 jetski for 1 hour free',
      location: 'Miami Beach',
      mainImage: imagesSeaRaySundancer50ft.img2,
      price: '1450',
      prices: [
        {
          price: '1450',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '1 jetski for 1 hour free'],
      gallery: [
        imagesSeaRaySundancer50ft.img1,
        imagesSeaRaySundancer50ft.img2,
        imagesSeaRaySundancer50ft.img3,
        imagesSeaRaySundancer50ft.img4,
        imagesSeaRaySundancer50ft.img5,
        imagesSeaRaySundancer50ft.img6,
      ],
    },
    {
      itemName: 'Sea Ray Sundancer 60ft',
      category: 'yachts',
      url: 'sundancer_60ft',
      description:
        'Searay sundancer 60ft 4 hours $1400. Includes:captain, mate ,cooler, Bluetooth speakers and floating Matt',
      location: '',
      mainImage: imagesSundancerSport60ft.img1,
      price: '1400',
      prices: [
        {
          price: '1400',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers', '1 jetski for 1 hour'],
      gallery: [
        imagesSundancerSport60ft.img1,
        imagesSundancerSport60ft.img2,
        imagesSundancerSport60ft.img3,
        imagesSundancerSport60ft.img4,
        imagesSundancerSport60ft.img5,
        imagesSundancerSport60ft.img6,
        imagesSundancerSport60ft.img7,
        imagesSundancerSport60ft.img8,
        imagesSundancerSport60ft.img9,
        imagesSundancerSport60ft.img10,
      ],
    },
    {
      itemName: 'Sunseeker 65ft',
      category: 'yachts',
      url: 'sunseeker_65ft',
      description:
        'Sunseeker 65ft summer special: Monday-friday $1800 Weekends $1900 Includes: captain, mate, gas, floating Matt and 1 jetski for 1 hour!',
      location: '',
      mainImage: imagesSunseeker65ft.img1,
      price: '1800',
      prices: [
        {
          price: '1800',
          time: '',
          days: 'Monday - Friday',
        },
        {
          price: '1900',
          time: '',
          days: 'Weekends',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '1 jetski for 1 hour!'],
      gallery: [
        imagesSunseeker65ft.img1,
        imagesSunseeker65ft.img2,
        imagesSunseeker65ft.img3,
        imagesSunseeker65ft.img4,
        imagesSunseeker65ft.img5,
        imagesSunseeker65ft.img6,
        imagesSunseeker65ft.img7,
      ],
    },
    {
      itemName: 'Sunseeker New Page 75ft',
      category: 'yachts',
      url: 'sunseeker_new_page_75ft',
      description:
        'Sunseeker 75ft New page 4 hours $2850 Includes:captain, mate ,cooler, Bluetooth speakers,floating Matt and 1 jetski 1 hour free',
      location: '',
      mainImage: imagesNewPage75ft.img1,
      price: '2850',
      prices: [
        {
          price: '2850',
          time: '4',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers', '1 jetski for 1 hour'],
      gallery: [
        imagesNewPage75ft.img1,
        imagesNewPage75ft.img2,
        imagesNewPage75ft.img3,
        imagesNewPage75ft.img4,
        imagesNewPage75ft.img5,
      ],
    },
    {
      itemName: 'Sunseeker 80ft Guili',
      category: 'yachts',
      url: 'sunseeker_80ft_guili',
      description:
        'Sunseeker 80ft 4 hours for only $3000! Includes: captain, mate, gas, floating matt and 2 jetskies for 1 hour each! Book now!',
      location: 'Miami Beach',
      mainImage: imagesSunseeker80ft.img1,
      price: '3000',
      prices: [
        {
          price: '3000',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '2 jetskies for 1 hour'],
      gallery: [
        imagesSunseeker80ft.img1,
        imagesSunseeker80ft.img2,
        imagesSunseeker80ft.img3,
        imagesSunseeker80ft.img4,
        imagesSunseeker80ft.img5,
      ],
    },
    {
      itemName: 'Sunseeker Predator 80ft',
      category: 'yachts',
      url: 'sunseeker_predator_80ft',
      description:
        'Sunseeker predetor 80 ft available now $4500 Includes: captain, mate, floating Matt,gas and 2 jetskies for 1 hour! Location: Miami Beach',
      location: 'Miami Beach',
      mainImage: imagesSunseekerPreadator80ft.img1,
      price: '4500',
      prices: [
        {
          price: '4500',
          time: '',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', '2 jetskies for 1 hour'],
      gallery: [
        imagesSunseekerPreadator80ft.img1,
        imagesSunseekerPreadator80ft.img2,
        imagesSunseekerPreadator80ft.img3,
        imagesSunseekerPreadator80ft.img4,
        imagesSunseekerPreadator80ft.img5,
        imagesSunseekerPreadator80ft.img6,
        imagesSunseekerPreadator80ft.img7,
        imagesSunseekerPreadator80ft.img8,
      ],
    },
    {
      itemName: 'Viking 55ft',
      category: 'yachts',
      url: 'viking_55ft',
      description: 'Viking 55ft available: 4 hours $1500 Includes: captain, mate, gas, cooler and floating Matt ',
      location: '',
      mainImage: imagesViking.img1,
      price: '1500',
      prices: [
        {
          price: '1500',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesViking.img1,
        imagesViking.img2,
        imagesViking.img3,
        imagesViking.img4,
        imagesViking.img5,
        imagesViking.img6,
        imagesViking.img7,
        imagesViking.img8,
        imagesViking.img9,
        imagesViking.img10,
      ],
    },
    {
      itemName: 'Yamaha 25ft',
      category: 'yachts',
      url: 'yamaha_25ft',
      description:
        'Yamaha ar25 ft available 4 hours $499 Includes: captain, gas, cooler, Bluetooth speakers and floating Matt.',
      location: '',
      mainImage: imagesYamaha.img1,
      price: '499',
      prices: [
        {
          price: '499',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt', 'Cooler', 'Bluetooth speakers'],
      gallery: [imagesYamaha.img1, imagesYamaha.img2],
    },
  ],
  transportation: [
    {
      itemName: 'Chevrolet Tahoe 2023',
      category: 'transportation',
      url: 'chevrolet_tahoe_2023',
      description:
        'Chevrolet Tahoe 2023 Half day 4 hours $250 Rate $75 per hour. Includes: Chofer and gas. No hidden fees',
      location: '',
      mainImage: imagesTransportation.img1,
      price: '75',
      prices: [
        {
          price: '75',
          time: '1',
          days: '',
        },
        {
          price: '250',
          time: '4',
          days: '',
        },
      ],
      aboutIt: ['Chofer', 'Gas'],
      gallery: [
        imagesTransportation.img1,
        imagesTransportation.img2,
        imagesTransportation.img3,
        imagesTransportation.img4,
      ],
    },
    {
      itemName: 'Mercedes Benz',
      category: 'transportation',
      url: 'merdedes_benz',
      description: 'Mercedes Benz 2022 sprinter $125 per hour 14 passengers Includes: driver and gas .',
      capacity: '14',
      location: '',
      mainImage: imagesMercedesBenz.img1,
      price: '125',
      prices: [
        {
          price: '125',
          time: '1',
          days: '',
        },
      ],
      aboutIt: ['Driver', 'Gas'],
      gallery: [
        imagesMercedesBenz.img1,
        imagesMercedesBenz.img2,
        imagesMercedesBenz.img3,
        imagesMercedesBenz.img4,
        imagesMercedesBenz.img5,
      ],
    },
  ],
  jetskies: [
    {
      itemName: 'Jetskies',
      category: 'jetskies',
      url: 'jetskies',
      description: 'Jetskies available 1 hour $125 Half day. 4 hours $350. Full day 6 hours $450',
      location: '',
      mainImage: imagesWaveRunner.img1,
      price: '125',
      prices: [
        {
          price: '125',
          time: '1',
          days: '',
        },
        {
          price: '350',
          time: '4',
          days: 'Half day',
        },
        {
          price: '450',
          time: '6',
          days: 'Full day',
        },
      ],
      aboutIt: ['Gas', 'Life vest'],
      gallery: [imagesWaveRunner.img1],
    },
    {
      itemName: 'Jet Car',
      category: 'jetskies',
      url: 'jet_car',
      description: '',
      capacity: '',
      location: '',
      mainImage: imagesJetCar.img1,
      price: '399',
      prices: [
        {
          price: '399',
          time: '1',
          days: '',
        },
      ],
      aboutIt: ['Gas'],
      gallery: [imagesJetCar.img1],
    },
  ],
}

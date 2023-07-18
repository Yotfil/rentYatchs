import { imagesLumar70ft } from './lumar70ft'
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
import { imagesNewPage75ft } from './new_page75gt'
import { imagesRegal90ft } from './regal_90ft'

export const data = {
  yatch: [
    {
      yatchName: 'Absolute 60ft',
      category: 'yatch',
      url: 'absolute_60ft',
      description: '',
      location: '',
      mainImage: imagesAbsolute60ft.img1,
      price: '',
      prices: [
        {
          price: '',
          time: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesAbsolute60ft.img1,
        imagesAbsolute60ft.img2,
        imagesAbsolute60ft.img3,
        imagesAbsolute60ft.img4,
        imagesAbsolute60ft.img5,
      ],
    },
    {
      yatchName: 'Axopar Brabus 40ft',
      category: 'yatch',
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
      yatchName: 'Azimut 52ft',
      category: 'yatch',
      url: 'azimut_52ft',
      description: '',
      location: '',
      mainImage: imagesAzimut52ft.img1,
      price: '',
      prices: [
        {
          price: '',
          time: '',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesAzimut52ft.img1,
        imagesAzimut52ft.img2,
        imagesAzimut52ft.img3,
        imagesAzimut52ft.img4,
        imagesAzimut52ft.img5,
      ],
    },
    {
      yatchName: 'Azimut 55ft',
      category: 'yatch',
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
      yatchName: 'Cruiser 45ft',
      category: 'yatch',
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
      yatchName: 'Cruiser 50 ft fly bridge',
      category: 'yatch',
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
      yatchName: 'Escápa Silverton 50ft',
      category: 'yatch',
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
      yatchName: 'Icon 65ft',
      category: 'yatch',
      url: 'icon_65ft',
      description: '',
      location: '',
      mainImage: imagesIcon65ft.img1,
      price: '',
      prices: [
        {
          price: '',
          time: '',
          days: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [imagesIcon65ft.img1, imagesIcon65ft.img2, imagesIcon65ft.img3],
    },
    {
      yatchName: 'Leopardo 119ft',
      category: 'yatch',
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
      yatchName: 'Lumar 70ft',
      category: 'yatch',
      url: 'lumar_70ft',
      description:
        '4 hours $2.500 all in! Includes: captain, mate, gas, floating Matt and 2 jetskies for 1 hour. Location: Miami River',
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
      yatchName: 'Marques 70ft',
      category: 'yatch',
      url: 'marques_70ft',
      description: '',
      location: '',
      mainImage: imagesMarques70ft.img1,
      price: '',
      prices: [
        {
          price: '',
          time: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
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
      yatchName: 'New Page 75ft',
      category: 'yatch',
      url: 'new_page_75ft',
      description: '',
      location: '',
      mainImage: imagesNewPage75ft.img1,
      price: '',
      prices: [
        {
          price: '',
          time: '',
        },
      ],
      aboutIt: ['Mate', 'Captain', 'Gas', 'Floating Matt'],
      gallery: [
        imagesNewPage75ft.img1,
        imagesNewPage75ft.img2,
        imagesNewPage75ft.img3,
        imagesNewPage75ft.img4,
        imagesNewPage75ft.img5,
      ],
    },
    {
      yatchName: 'Regal 90ft',
      category: 'yatch',
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
  ],
}

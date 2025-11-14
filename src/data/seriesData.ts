export interface Character {
  id: string;
  name: string;
  outfits: Outfit[];
}

export interface Outfit {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'traje' | 'casual' | 'vestido' | 'uniforme' | 'abrigo' | 'deportivo' | 'accesorios' | 'falda' | 'pantalón' | 'camiseta' | 'camisa';
  clothingSeason?: 'primavera' | 'verano' | 'otoño' | 'invierno';
  season?: string;
  episode?: string;
}

export interface Series {
  id: string;
  name: string;
  characters: Character[];
}

export const seriesData: Series[] = [
  {
    id: 'suits',
    name: 'Suits',
    characters: [
      {
        id: 'harvey-specter',
        name: 'Harvey Specter',
        outfits: [
          {
            id: '1',
            title: 'Traje Tom Ford Navy',
            description: 'Traje azul marino de tres piezas Tom Ford con corbata de seda italiana. El look característico de Harvey.',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop',
            type: 'traje',
            clothingSeason: 'otoño',
            season: '1',
            episode: '1'
          },
          {
            id: '2',
            title: 'Traje Gris Oxford',
            description: 'Traje gris Oxford con camisa blanca y corbata borgoña. Elegancia corporativa en su máxima expresión.',
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop',
            type: 'traje',
            clothingSeason: 'invierno',
            season: '2',
            episode: '5'
          },
          {
            id: '3',
            title: 'Look Casual Ejecutivo',
            description: 'Blazer navy sin corbata con camisa azul claro. Para reuniones más informales pero manteniendo el estilo.',
            image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=600&fit=crop',
            type: 'camisa',
            clothingSeason: 'primavera',
            season: '3',
            episode: '10'
          }
        ]
      },
      {
        id: 'mike-ross',
        name: 'Mike Ross',
        outfits: [
          {
            id: '4',
            title: 'Traje Slim Fit Charcoal',
            description: 'Traje ajustado color carbón con corbata estrecha. El estilo moderno de Mike Ross.',
            image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=600&fit=crop',
            type: 'traje',
            clothingSeason: 'otoño',
            season: '1',
            episode: '2'
          },
          {
            id: '5',
            title: 'Traje Azul Marino',
            description: 'Traje navy de corte europeo con camisa blanca y corbata azul.',
            image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=600&fit=crop',
            type: 'traje',
            clothingSeason: 'invierno',
            season: '2',
            episode: '8'
          }
        ]
      }
    ]
  },
  {
    id: 'friends',
    name: 'Friends',
    characters: [
      {
        id: 'rachel-green',
        name: 'Rachel Green',
        outfits: [
          {
            id: '6',
            title: 'Mini Falda y Chaleco',
            description: 'Mini falda a cuadros con chaleco ajustado y camisa blanca. Icónico look de los 90s.',
            image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
            type: 'falda',
            clothingSeason: 'primavera',
            season: '3',
            episode: '15'
          },
          {
            id: '7',
            title: 'Vestido Negro Elegante',
            description: 'Little black dress de Ralph Lauren con tacones. El estilo sofisticado de Rachel.',
            image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop',
            type: 'vestido',
            clothingSeason: 'verano',
            season: '5',
            episode: '20'
          },
          {
            id: '8',
            title: 'Look Casual Central Perk',
            description: 'Jeans de talle alto con suéter de cuello alto y blazer oversize.',
            image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop',
            type: 'pantalón',
            clothingSeason: 'otoño',
            season: '4',
            episode: '12'
          }
        ]
      },
      {
        id: 'monica-geller',
        name: 'Monica Geller',
        outfits: [
          {
            id: '9',
            title: 'Delantal de Chef',
            description: 'Delantal profesional sobre ropa casual. Monica en su elemento en la cocina.',
            image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=600&fit=crop',
            type: 'uniforme',
            clothingSeason: 'verano',
            season: '2',
            episode: '7'
          }
        ]
      }
    ]
  },
  {
    id: 'stranger-things',
    name: 'Stranger Things',
    characters: [
      {
        id: 'eleven',
        name: 'Eleven',
        outfits: [
          {
            id: '10',
            title: 'Look Punk Rock',
            description: 'Camisa de franela a cuadros sobre camiseta negra con jeans rotos. El estilo rebelde de Eleven en la temporada 2.',
            image: 'https://images.unsplash.com/photo-1509319117893-57f90a5feb22?w=400&h=600&fit=crop',
            type: 'camiseta',
            clothingSeason: 'otoño',
            season: '2',
            episode: '7'
          },
          {
            id: '11',
            title: 'Vestido Rosa Años 80',
            description: 'Vestido rosa pastel estilo años 80 con cinturón. La transformación de Eleven.',
            image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop',
            type: 'vestido',
            clothingSeason: 'primavera',
            season: '1',
            episode: '6'
          },
          {
            id: '12',
            title: 'Bata de Hospital Hawkins Lab',
            description: 'La icónica bata blanca del laboratorio de Hawkins con la que apareció por primera vez.',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=600&fit=crop',
            type: 'uniforme',
            clothingSeason: 'invierno',
            season: '1',
            episode: '1'
          }
        ]
      },
      {
        id: 'steve-harrington',
        name: 'Steve Harrington',
        outfits: [
          {
            id: '13',
            title: 'Uniforme Scoops Ahoy',
            description: 'El memorable uniforme de marinero de la heladería Scoops Ahoy.',
            image: 'https://images.unsplash.com/photo-1621951753554-aa3d87834e9f?w=400&h=600&fit=crop',
            type: 'uniforme',
            clothingSeason: 'verano',
            season: '3',
            episode: '1'
          }
        ]
      }
    ]
  },
  {
    id: 'breaking-bad',
    name: 'Breaking Bad',
    characters: [
      {
        id: 'walter-white',
        name: 'Walter White',
        outfits: [
          {
            id: '14',
            title: 'Traje Amarillo Hazmat',
            description: 'El icónico traje amarillo de protección química que usaban en el laboratorio.',
            image: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=400&h=600&fit=crop',
            type: 'uniforme',
            clothingSeason: 'verano',
            season: '1',
            episode: '1'
          },
          {
            id: '15',
            title: 'Porkpie Hat Negro',
            description: 'El sombrero negro característico de Heisenberg con camisa verde.',
            image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&h=600&fit=crop',
            type: 'accesorios',
            clothingSeason: 'otoño',
            season: '4',
            episode: '6'
          }
        ]
      },
      {
        id: 'jesse-pinkman',
        name: 'Jesse Pinkman',
        outfits: [
          {
            id: '16',
            title: 'Look Streetwear',
            description: 'Sudadera con capucha oversize con jeans anchos y zapatillas. El estilo urbano de Jesse.',
            image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&h=600&fit=crop',
            type: 'casual',
            clothingSeason: 'primavera',
            season: '2',
            episode: '3'
          }
        ]
      }
    ]
  }
];

import { Category } from '../types/category';
import { Product } from '../types/product';

type Data = { 
    categories : Category[],
    products : Product[],
};

export const data : Data = {
    categories : [
        {id:1, name:'Hortifrúti', image: 'https://i.pinimg.com/550x/bb/0b/c5/bb0bc5c210fc6cc315206811ce5fe131.jpg'},
        {id: 2, name:'Bebidas', image: 'https://clubedobarman.com/wp-content/uploads/2018/09/bottles1-1024x575.jpg'},
        {id:3, name:'Mercearia', image: 'https://gamaalimentos.com/wp-content/uploads/2023/03/produtos-da-cesta-basica-mercearia-1-300x300.png'},
        {id:4, name:'Laticínios', image: 'https://laticiniosholandes.com.br/wp-content/uploads/2023/03/03_2023_Blog_08_Laticinios.png'},
        {id:5, name:'Limpeza', image: 'https://biossen.com.br/blog/wp-content/uploads/2023/04/27-03-750x410.jpeg'},
    ],
    products : [
        {id:1, name:'Arroz Branco Caçarola', value: 6.98, amount: 2000, image: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/199045/Arroz-Polido-CACAROLA-Tipo-1-Pacote-1kg-.jpg?v=637915967598030000', category: 3},
        {id:2, name:'Feijão Preto Tio João', value: 11.99, amount: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGPnOB86eYRz8IeY6P5S9NcMlC_m7E40Miw&s', category: 3},
        {id:3, name:'Açucar União', value: 4.89, amount: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpw3AYbFBzcp5oUhT61YiVQ72iuRhC4RiEA&s', category: 3},
        {id:4, name:'Sal Cisne', value: 1.28, amount: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnWqjdetVlLQhnOiGelGPlhDgmhWOqNkVqA&s', category: 3},
        {id:5, name:'Bolacha Cream Cracker', value: 5.15, amount: 2, image: 'https://static.clubeextra.com.br/img/uploads/1/978/24033978.png', category: 3},
        {id:6, name:'Iogurt Nestle', value: 4.89, amount: 2, image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/beirario/media/uploads/produtos/foto/be0f781ada5bcfile.png', category: 4},
        {id:7, name:'Coca Cola 2L', value: 15, amount: 2, image: 'https://cdn.dooca.store/149445/products/vchckervavlvinjypyr2ifilotle1dlt6lbr_620x620+fill_ffffff.png?v=1724757765&webp=0', category: 2},
        {id:8, name:'Hortifrúti', value: 3, amount: 2, image: 'https://png.pngtree.com/png-vector/20240123/ourlarge/pngtree-banana-fruit-png-png-image_11463666.png', category: 1},
    ]
}

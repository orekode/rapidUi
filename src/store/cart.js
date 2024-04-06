import { create } from "zustand";
import { persist } from "zustand/middleware";
import { withStorageDOMEvents } from ".";


const animate_cart_icon = (event) => {
    const icon = document.querySelector("#cart-icon-animate").cloneNode(true);
    const target = document.querySelector("#nav_cart_icon").getBoundingClientRect();

    document.body.appendChild(icon);

    //position icon at mouse position
    icon.style.left = event.clientX - (icon.offsetWidth / 2)  + 'px';
    icon.style.top  = event.clientY - (icon.offsetHeight / 2) + 'px';

    //make icon visible
    icon.style.opacity = 1;
    icon.style.zIndex  = 60;

    setTimeout(() => {
        icon.style.transition = '0.6s';

        //move icon to where 
        icon.style.left = target.left + 'px';
        icon.style.top  = target.top + 'px';

        icon.style.scale = 0.5;

        setTimeout(() => {
            icon.style.scale = 0;
    
            setTimeout(() => {
                document.body.removeChild(icon);
            }, 100)
    
        }, 1000 * 0.5);

    }, 200)

    




}

export const useCart = create( persist( (set) => ({
        show: false,
        items: [],
        total_quantity: 0,
        total_price: 0,
        product_ids: '',
        
        toggle: () => set((state) => ({ show: !state.show })),

        toggle_item: (event, item) => set((state) => {
            let items = [...state.items];
            let product_ids = state.product_ids;
            let product_id = `{${item.id}}`;
            let total_price = state.total_price;

            

            if(!product_ids.includes(product_id)) {
                items.push({...item, quantity: 1});

                product_ids += product_id;
                total_price += parseFloat(item.price);

                animate_cart_icon(event);

            }
            else {
                
                let cart_item = items.filter( cart_item => cart_item.id == item.id)[0];
                
                product_ids = product_ids.replaceAll(product_id, '');
                total_price -= parseInt(item.quantity) * parseFloat(item.price);

                items = items.filter( cart_item => cart_item.id !== item.id);
            }


            return {...state, items, product_ids, total_quantity: items.length, total_price};
        }),

        add_item: (item) => set((state) => {
            let items = [...state.items];
            let product_ids = state.product_ids;
            let product_id = `{${item.id}}`;
            let total_price = state.total_price;

            if(!product_ids.includes(product_id)) {
                items.push({...item, quantity: 1});

                product_ids += product_id;
                total_price += parseFloat(item.price);

                animate_cart_icon(event);

            }

            return {...state, items, product_ids, total_quantity: items.length, total_price};
        }),

        increase: (item) => set((state) => {

            let items = [...state.items];
            let product_ids = state.product_ids;
            let product_id = `{${item.id}}`;
            let total_price = state.total_price;

            if(!product_ids.includes(product_id)) {
                items.push({...item, quantity: 0});
                product_ids += product_id;
            }
            
            items.map( cart_item => {

                if(item.id !== cart_item.id) return false;

                cart_item.quantity++;
                total_price += parseFloat(cart_item.price);

            });

            const return_state = {...state, items};
            console.log(return_state);

            return {...state, items, product_ids, total_quantity: items.length, total_price};

        }),

        decrease: (item) => set((state) => {

            let items = [...state.items];
            let product_ids = state.product_ids;
            let product_id = `{${item.id}}`;
            let total_price = state.total_price;

            if(item.quantity <= 1 ) {
                items = items.filter( cart_item => cart_item.id !== item.id);
                product_ids = product_ids.replaceAll(product_id, '');
                total_price -= parseFloat(item.price);
            }
            else {
                items.map( cart_item => {
    
                    if(item.id !== cart_item.id) return false;
    
                    cart_item.quantity--;
                    total_price -= parseFloat(cart_item.price);
                });

            }

            return {...state, items, product_ids, total_quantity: items.length, total_price};

        }),

        init_cart: () => set((state) => ({
            show: false,
            items: [],
            total_quantity: 0,
            total_price: 0,
            product_ids: '',
        }))
    }),
    {
        name: "mode"
    })
);

withStorageDOMEvents(useCart);
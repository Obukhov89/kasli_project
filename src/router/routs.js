import HeadPage from "@/components/HeadPage";
import ListItems from "@/components/ListItems";

export default [
    {
        path: '/',
        name: 'HomePage',
        component: HeadPage
    },
    {
        path: '/list-items',
        name: 'ListItems',
        component: ListItems
    },
]
export interface NavigationModel {
    title: string, 
    docs: Array<DocmumentLink>
}

interface DocmumentLink{
    docTitle: string;
    route: string;
}
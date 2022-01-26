export interface Dict  {
    [key: string]: any[];
}

export const eventDict: Dict = {
    'click': ['click'],
    'hover': ['mouseover', 'mouseleave']
}

export function getDictionaryValue(key: string) {
    return eventDict[key];
}
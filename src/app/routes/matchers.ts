import { UrlSegment, Route } from '@angular/router';


function matcher(path:string, url: UrlSegment[]) {
    if (url.length && url[0].path === path) {
      return {
        consumed: url,
        posParams: url.slice(1).reduce((acc, segment, i) => {
          acc[`${i + 1}`] = segment;
          return acc;
        }, {} as { [key: string]: UrlSegment })
      };
    }
    return null;
  }


export const productMatcher = (url: UrlSegment[]) => matcher('view-product', url);
export const groupMatcher = (url: UrlSegment[]) => matcher('view-products', url);

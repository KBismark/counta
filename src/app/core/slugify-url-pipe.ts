import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify',
  standalone: true
})
export class SlugifyPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';

    // Convert to lowercase
    let slug = value.toLowerCase();

    // Replace spaces and underscores with hyphens
    slug = slug.replace(/[\s_]+/g, '-');

    // Remove invalid URL characters except for hyphens
    slug = slug.replace(/[^a-z0-9\-]/g, '');

    // Remove multiple hyphens
    slug = slug.replace(/-+/g, '-');

    // Trim hyphens from start and end
    slug = slug.replace(/^-+|-+$/g, '');

    // Finally, URL encode to be safe for browser usage
    return encodeURIComponent(slug);
  }
}


@Pipe({
  name: 'slugifyDesc',
  standalone: true
})
export class DescriptionSlugifyPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';

    // Convert to lowercase
    let slug = value.slice(0, 60);

    // Replace full stops, commas, and other punctuation marks with a +
    slug = slug.replace(/[.,!?'"]/g, '-');

    // Remove multiple hyphens
    slug = slug.replace(/-+/g, '-');

    // Trim hyphens from start and end
    slug = slug.replace(/^-+|-+$/g, '');

    return slug;
  }
}


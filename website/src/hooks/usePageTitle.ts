import { useEffect } from 'react';
import { siteConfig } from '../config';

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = `${siteConfig.site.name} — ${title}`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}


import Announcement from '@/templates/announcement';
import Enigma from '@/templates/enigma';
import Newsletter from '@/templates/newsletter';
import Transactional from '@/templates/transactional';
import Welcome from '@/templates/welcome';

// Using static imports for the registry ensures that all templates are available 
// immediately for client-side rendering without additional network requests for chunks.

export const templatesRegistry: Record<string, any> = {
  'announcement.tsx': Announcement,
  'enigma.tsx': Enigma,
  'newsletter.tsx': Newsletter,
  'transactional.tsx': Transactional,
  'welcome.tsx': Welcome,
};

export const templateNames = Object.keys(templatesRegistry);

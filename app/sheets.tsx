import { registerSheet } from 'react-native-actions-sheet';
import { CustomActionSheet } from '@/components/ui/ActionSheet';
import { SearchActionSheet } from '@/components/ui/SearchActionSheet';
import { FiltersActionSheet } from '@/components/ui/FiltersActionSheet';
import { ModifyBookingActionSheet } from '@/components/ui/ModifyBookingActionSheet';
import { ContactHotelActionSheet } from '@/components/ui/ContactHotelActionSheet';
import { AmenitiesActionSheet } from '@/components/ui/AmenitiesActionSheet';
import { RoomUpgradeActionSheet } from '@/components/ui/RoomUpgradeActionSheet';
import { ReviewsActionSheet } from '@/components/ui/ReviewsActionSheet';
import { EditStayActionSheet } from '@/components/ui/EditStayActionSheet';
import { CouponsActionSheet } from '@/components/ui/CouponsActionSheet';

registerSheet('profile-options', CustomActionSheet);
registerSheet('amenities', AmenitiesActionSheet);
registerSheet('reviews', ReviewsActionSheet);
registerSheet('upgraderoom', RoomUpgradeActionSheet);
registerSheet('search', SearchActionSheet);
registerSheet('editstay', EditStayActionSheet);
registerSheet('contact-hotel', ContactHotelActionSheet);
registerSheet('modify-booking', ModifyBookingActionSheet);
registerSheet('filters', FiltersActionSheet);
registerSheet('coupons-sheet', CouponsActionSheet);

// Export the sheet IDs for type safety
export const SHEET_IDS = {
  PROFILE_OPTIONS: 'profile-options',
  AMENITIES: 'amenities',
  REVIEWS:'reviews',
  UPGRADEROOM:'upgraderoom',
  SEARCH : 'search',
  CONTACT_HOTEL: 'contact-hotel',
  MODIFY_BOOKING: 'modify-booking',
  FILTERS: 'filters'
} as const;

export type SheetId = typeof SHEET_IDS[keyof typeof SHEET_IDS];
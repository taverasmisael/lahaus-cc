export interface RealEstate {
  id: string
  attributes: RealEstateAttributes
}

export interface RealEstateAttributes {
  administration_price: number
  amenities: number[]
  bathroom: number[]
  bedroom: number[]
  builder?: string
  city: string
  code: string
  country: string
  delivered_at: string
  description: string
  fiduciary?: string
  gallery_urls: string[]
  is_new: boolean
  is_prelaunch: boolean
  la_haus_city: string
  la_haus_state: string
  latitude: number
  longitude: number
  matterport?: string
  max_price?: number
  min_area: number
  min_price: number
  minimum_price_guaranteed?: number
  name: string
  neighborhood: string
  parking_lots_units: number[]
  parking_lots: number[]
  price_per_square_meter: number
  reservation_fee_measure_unit?: string
  reservation_fee?: NumberConstructor
  slug: string
  stratum: number
  year_built: number
}

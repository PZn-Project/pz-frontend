import type { IconType } from 'react-icons'
import {
  FaFootballBall,
  FaCamera,
  FaMapPin,
  FaCity,
  FaRoad,
  FaRegAddressBook,
} from 'react-icons/fa'
import { MdDriveFileRenameOutline, MdDescription } from 'react-icons/md'
import { SelectOption } from '@Utils/types/select'
import { provinces } from '@Utils/constant/provinces'
import { sports } from '@Utils/constant/sports'

type AddClubFields = {
  id: string
  name:
    | 'name'
    | 'sport'
    | 'description'
    | 'logoUrl'
    | 'province'
    | 'city'
    | 'street'
    | 'addressNumber'
  type: string
  placeholder: string
  required: boolean
  Icon: IconType
  options?: SelectOption[]
}

export const ADD_CLUB_FIELDS: AddClubFields[] = [
  {
    id: '1',
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
    Icon: MdDriveFileRenameOutline,
  },
  {
    id: '2',
    name: 'sport',
    type: 'select',
    placeholder: 'Sport',
    required: true,
    Icon: FaFootballBall,
    options: sports,
  },
  {
    id: '3',
    name: 'description',
    type: 'textarea',
    placeholder: 'Description',
    required: true,
    Icon: MdDescription,
  },
  {
    id: '4',
    name: 'logoUrl',
    type: 'text',
    placeholder: 'Logo url',
    required: true,
    Icon: FaCamera,
  },
]

export const ADD_CLUB_FIELDS_ADDRESS: AddClubFields[] = [
  {
    id: '5',
    name: 'province',
    type: 'select',
    placeholder: 'Province',
    required: true,
    Icon: FaMapPin,
    options: provinces,
  },
  {
    id: '6',
    name: 'city',
    type: 'text',
    placeholder: 'City',
    required: true,
    Icon: FaCity,
  },
  {
    id: '7',
    name: 'street',
    type: 'text',
    placeholder: 'Street',
    required: true,
    Icon: FaRoad,
  },
  {
    id: '8',
    name: 'addressNumber',
    type: 'text',
    placeholder: 'Number',
    required: true,
    Icon: FaRegAddressBook,
  },
]

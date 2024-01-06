import { InvitationStatus } from '@Store/types'

export const INVITATION_STATUS = {
  [InvitationStatus.ACCEPTED]: 'Zaakceptowane',
  [InvitationStatus.REJECTED]: 'Odrzucone',
  [InvitationStatus.PENDING]: 'Oczekujące',
}

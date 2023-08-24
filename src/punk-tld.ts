import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  DataChanged as DataChangedEvent,
  DefaultDomainChanged as DefaultDomainChangedEvent,
  DomainBuyingToggle as DomainBuyingToggleEvent,
  DomainCreated as DomainCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ReferralFeeChanged as ReferralFeeChangedEvent,
  TldPriceChanged as TldPriceChangedEvent,
  TldRoyaltyChanged as TldRoyaltyChangedEvent,
  Transfer as TransferEvent
} from "../generated/PunkTLD/PunkTLD"
import {
  Approval,
  ApprovalForAll,
  DataChanged,
  DefaultDomainChanged,
  DomainBuyingToggle,
  DomainCreated,
  OwnershipTransferred,
  ReferralFeeChanged,
  TldPriceChanged,
  TldRoyaltyChanged,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDataChanged(event: DataChangedEvent): void {
  let entity = new DataChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultDomainChanged(
  event: DefaultDomainChangedEvent
): void {
  let entity = new DefaultDomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.defaultDomain = event.params.defaultDomain

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDomainBuyingToggle(event: DomainBuyingToggleEvent): void {
  let entity = new DomainBuyingToggle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.domainBuyingToggle = event.params.domainBuyingToggle

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDomainCreated(event: DomainCreatedEvent): void {
  let entity = new DomainCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.owner = event.params.owner
  entity.fullDomainName = event.params.fullDomainName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReferralFeeChanged(event: ReferralFeeChangedEvent): void {
  let entity = new ReferralFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.referralFee = event.params.referralFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTldPriceChanged(event: TldPriceChangedEvent): void {
  let entity = new TldPriceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tldPrice = event.params.tldPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTldRoyaltyChanged(event: TldRoyaltyChangedEvent): void {
  let entity = new TldRoyaltyChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tldRoyalty = event.params.tldRoyalty

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

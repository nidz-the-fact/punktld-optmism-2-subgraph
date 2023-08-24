import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/PunkTLD/PunkTLD"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createDataChangedEvent(user: Address): DataChanged {
  let dataChangedEvent = changetype<DataChanged>(newMockEvent())

  dataChangedEvent.parameters = new Array()

  dataChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return dataChangedEvent
}

export function createDefaultDomainChangedEvent(
  user: Address,
  defaultDomain: string
): DefaultDomainChanged {
  let defaultDomainChangedEvent = changetype<DefaultDomainChanged>(
    newMockEvent()
  )

  defaultDomainChangedEvent.parameters = new Array()

  defaultDomainChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  defaultDomainChangedEvent.parameters.push(
    new ethereum.EventParam(
      "defaultDomain",
      ethereum.Value.fromString(defaultDomain)
    )
  )

  return defaultDomainChangedEvent
}

export function createDomainBuyingToggleEvent(
  user: Address,
  domainBuyingToggle: boolean
): DomainBuyingToggle {
  let domainBuyingToggleEvent = changetype<DomainBuyingToggle>(newMockEvent())

  domainBuyingToggleEvent.parameters = new Array()

  domainBuyingToggleEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  domainBuyingToggleEvent.parameters.push(
    new ethereum.EventParam(
      "domainBuyingToggle",
      ethereum.Value.fromBoolean(domainBuyingToggle)
    )
  )

  return domainBuyingToggleEvent
}

export function createDomainCreatedEvent(
  user: Address,
  owner: Address,
  fullDomainName: string
): DomainCreated {
  let domainCreatedEvent = changetype<DomainCreated>(newMockEvent())

  domainCreatedEvent.parameters = new Array()

  domainCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  domainCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  domainCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "fullDomainName",
      ethereum.Value.fromString(fullDomainName)
    )
  )

  return domainCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createReferralFeeChangedEvent(
  user: Address,
  referralFee: BigInt
): ReferralFeeChanged {
  let referralFeeChangedEvent = changetype<ReferralFeeChanged>(newMockEvent())

  referralFeeChangedEvent.parameters = new Array()

  referralFeeChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  referralFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "referralFee",
      ethereum.Value.fromUnsignedBigInt(referralFee)
    )
  )

  return referralFeeChangedEvent
}

export function createTldPriceChangedEvent(
  user: Address,
  tldPrice: BigInt
): TldPriceChanged {
  let tldPriceChangedEvent = changetype<TldPriceChanged>(newMockEvent())

  tldPriceChangedEvent.parameters = new Array()

  tldPriceChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tldPriceChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tldPrice",
      ethereum.Value.fromUnsignedBigInt(tldPrice)
    )
  )

  return tldPriceChangedEvent
}

export function createTldRoyaltyChangedEvent(
  user: Address,
  tldRoyalty: BigInt
): TldRoyaltyChanged {
  let tldRoyaltyChangedEvent = changetype<TldRoyaltyChanged>(newMockEvent())

  tldRoyaltyChangedEvent.parameters = new Array()

  tldRoyaltyChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tldRoyaltyChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tldRoyalty",
      ethereum.Value.fromUnsignedBigInt(tldRoyalty)
    )
  )

  return tldRoyaltyChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

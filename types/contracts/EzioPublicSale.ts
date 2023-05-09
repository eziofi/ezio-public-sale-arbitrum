/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface EzioPublicSaleInterface extends utils.Interface {
  functions: {
    "EZIO_RATE()": FunctionFragment;
    "PUBLIC_SALE_AMOUNT()": FunctionFragment;
    "RAISE_USDC_CAP()": FunctionFragment;
    "RAISE_USDC_THRESHOLD()": FunctionFragment;
    "XEZIO_RATE()": FunctionFragment;
    "afterPublicSaleExecute()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "buy(uint256)": FunctionFragment;
    "closingTime()": FunctionFragment;
    "executeFlag()": FunctionFragment;
    "hasClosed()": FunctionFragment;
    "hasWithdrawn(address)": FunctionFragment;
    "isOpen()": FunctionFragment;
    "openingTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "totalRaisedAmount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "wallet()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EZIO_RATE"
      | "PUBLIC_SALE_AMOUNT"
      | "RAISE_USDC_CAP"
      | "RAISE_USDC_THRESHOLD"
      | "XEZIO_RATE"
      | "afterPublicSaleExecute"
      | "balanceOf"
      | "buy"
      | "closingTime"
      | "executeFlag"
      | "hasClosed"
      | "hasWithdrawn"
      | "isOpen"
      | "openingTime"
      | "owner"
      | "pause"
      | "paused"
      | "renounceOwnership"
      | "totalRaisedAmount"
      | "transferOwnership"
      | "unpause"
      | "wallet"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "EZIO_RATE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PUBLIC_SALE_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RAISE_USDC_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RAISE_USDC_THRESHOLD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "XEZIO_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "afterPublicSaleExecute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "closingTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeFlag",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasClosed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasWithdrawn",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "isOpen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "openingTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRaisedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "EZIO_RATE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PUBLIC_SALE_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RAISE_USDC_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RAISE_USDC_THRESHOLD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "XEZIO_RATE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "afterPublicSaleExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeFlag",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasClosed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasWithdrawn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRaisedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Buy(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface BuyEventObject {
  account_: string;
  amount_: BigNumber;
}
export type BuyEvent = TypedEvent<[string, BigNumber], BuyEventObject>;

export type BuyEventFilter = TypedEventFilter<BuyEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WithdrawEventObject {
  account_: string;
  amount_: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface EzioPublicSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EzioPublicSaleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    EZIO_RATE(overrides?: CallOverrides): Promise<[number]>;

    PUBLIC_SALE_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    RAISE_USDC_CAP(overrides?: CallOverrides): Promise<[BigNumber]>;

    RAISE_USDC_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    XEZIO_RATE(overrides?: CallOverrides): Promise<[number]>;

    afterPublicSaleExecute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buy(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    executeFlag(overrides?: CallOverrides): Promise<[boolean]>;

    hasClosed(overrides?: CallOverrides): Promise<[boolean]>;

    hasWithdrawn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOpen(overrides?: CallOverrides): Promise<[boolean]>;

    openingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalRaisedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  EZIO_RATE(overrides?: CallOverrides): Promise<number>;

  PUBLIC_SALE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  RAISE_USDC_CAP(overrides?: CallOverrides): Promise<BigNumber>;

  RAISE_USDC_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  XEZIO_RATE(overrides?: CallOverrides): Promise<number>;

  afterPublicSaleExecute(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buy(
    usdcAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closingTime(overrides?: CallOverrides): Promise<BigNumber>;

  executeFlag(overrides?: CallOverrides): Promise<boolean>;

  hasClosed(overrides?: CallOverrides): Promise<boolean>;

  hasWithdrawn(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOpen(overrides?: CallOverrides): Promise<boolean>;

  openingTime(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalRaisedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wallet(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    EZIO_RATE(overrides?: CallOverrides): Promise<number>;

    PUBLIC_SALE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    RAISE_USDC_CAP(overrides?: CallOverrides): Promise<BigNumber>;

    RAISE_USDC_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    XEZIO_RATE(overrides?: CallOverrides): Promise<number>;

    afterPublicSaleExecute(overrides?: CallOverrides): Promise<void>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    executeFlag(overrides?: CallOverrides): Promise<boolean>;

    hasClosed(overrides?: CallOverrides): Promise<boolean>;

    hasWithdrawn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOpen(overrides?: CallOverrides): Promise<boolean>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    totalRaisedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    wallet(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Buy(address,uint256)"(
      account_?: PromiseOrValue<string> | null,
      amount_?: PromiseOrValue<BigNumberish> | null
    ): BuyEventFilter;
    Buy(
      account_?: PromiseOrValue<string> | null,
      amount_?: PromiseOrValue<BigNumberish> | null
    ): BuyEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdraw(address,uint256)"(
      account_?: PromiseOrValue<string> | null,
      amount_?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;
    Withdraw(
      account_?: PromiseOrValue<string> | null,
      amount_?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    EZIO_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    PUBLIC_SALE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    RAISE_USDC_CAP(overrides?: CallOverrides): Promise<BigNumber>;

    RAISE_USDC_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    XEZIO_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    afterPublicSaleExecute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    executeFlag(overrides?: CallOverrides): Promise<BigNumber>;

    hasClosed(overrides?: CallOverrides): Promise<BigNumber>;

    hasWithdrawn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<BigNumber>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalRaisedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EZIO_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PUBLIC_SALE_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    RAISE_USDC_CAP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RAISE_USDC_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    XEZIO_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    afterPublicSaleExecute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buy(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeFlag(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasWithdrawn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalRaisedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

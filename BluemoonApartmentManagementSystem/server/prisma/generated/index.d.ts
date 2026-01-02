
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resident
 * 
 */
export type Resident = $Result.DefaultSelection<Prisma.$ResidentPayload>
/**
 * Model Household
 * 
 */
export type Household = $Result.DefaultSelection<Prisma.$HouseholdPayload>
/**
 * Model TemporaryRecord
 * 
 */
export type TemporaryRecord = $Result.DefaultSelection<Prisma.$TemporaryRecordPayload>
/**
 * Model Fee
 * 
 */
export type Fee = $Result.DefaultSelection<Prisma.$FeePayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Function
 * 
 */
export type Function = $Result.DefaultSelection<Prisma.$FunctionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const Status: {
  PERMANENT: 'PERMANENT',
  TEMPORARY: 'TEMPORARY'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Type: {
  RESIDENCE: 'RESIDENCE',
  ABSENCE: 'ABSENCE'
};

export type Type = (typeof Type)[keyof typeof Type]


export const Cycle: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type Cycle = (typeof Cycle)[keyof typeof Cycle]


export const PaidStatus: {
  PAID: 'PAID',
  UNPAID: 'UNPAID'
};

export type PaidStatus = (typeof PaidStatus)[keyof typeof PaidStatus]


export const Method: {
  MOMO: 'MOMO',
  CASH: 'CASH'
};

export type Method = (typeof Method)[keyof typeof Method]

}

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type Cycle = $Enums.Cycle

export const Cycle: typeof $Enums.Cycle

export type PaidStatus = $Enums.PaidStatus

export const PaidStatus: typeof $Enums.PaidStatus

export type Method = $Enums.Method

export const Method: typeof $Enums.Method

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resident`: Exposes CRUD operations for the **Resident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Residents
    * const residents = await prisma.resident.findMany()
    * ```
    */
  get resident(): Prisma.ResidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.household`: Exposes CRUD operations for the **Household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.HouseholdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temporaryRecord`: Exposes CRUD operations for the **TemporaryRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemporaryRecords
    * const temporaryRecords = await prisma.temporaryRecord.findMany()
    * ```
    */
  get temporaryRecord(): Prisma.TemporaryRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fee`: Exposes CRUD operations for the **Fee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fees
    * const fees = await prisma.fee.findMany()
    * ```
    */
  get fee(): Prisma.FeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.function`: Exposes CRUD operations for the **Function** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Functions
    * const functions = await prisma.function.findMany()
    * ```
    */
  get function(): Prisma.FunctionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resident: 'Resident',
    Household: 'Household',
    TemporaryRecord: 'TemporaryRecord',
    Fee: 'Fee',
    Bill: 'Bill',
    Payment: 'Payment',
    Function: 'Function'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resident" | "household" | "temporaryRecord" | "fee" | "bill" | "payment" | "function"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resident: {
        payload: Prisma.$ResidentPayload<ExtArgs>
        fields: Prisma.ResidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          findFirst: {
            args: Prisma.ResidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          findMany: {
            args: Prisma.ResidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>[]
          }
          create: {
            args: Prisma.ResidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          createMany: {
            args: Prisma.ResidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          update: {
            args: Prisma.ResidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          deleteMany: {
            args: Prisma.ResidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          aggregate: {
            args: Prisma.ResidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResident>
          }
          groupBy: {
            args: Prisma.ResidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidentCountArgs<ExtArgs>
            result: $Utils.Optional<ResidentCountAggregateOutputType> | number
          }
        }
      }
      Household: {
        payload: Prisma.$HouseholdPayload<ExtArgs>
        fields: Prisma.HouseholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findFirst: {
            args: Prisma.HouseholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findMany: {
            args: Prisma.HouseholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          create: {
            args: Prisma.HouseholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          createMany: {
            args: Prisma.HouseholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HouseholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          update: {
            args: Prisma.HouseholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HouseholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.HouseholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      TemporaryRecord: {
        payload: Prisma.$TemporaryRecordPayload<ExtArgs>
        fields: Prisma.TemporaryRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemporaryRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemporaryRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload>
          }
          findFirst: {
            args: Prisma.TemporaryRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemporaryRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload>
          }
          findMany: {
            args: Prisma.TemporaryRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload>[]
          }
          create: {
            args: Prisma.TemporaryRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload>
          }
          createMany: {
            args: Prisma.TemporaryRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TemporaryRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload>
          }
          update: {
            args: Prisma.TemporaryRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload>
          }
          deleteMany: {
            args: Prisma.TemporaryRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemporaryRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemporaryRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryRecordPayload>
          }
          aggregate: {
            args: Prisma.TemporaryRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemporaryRecord>
          }
          groupBy: {
            args: Prisma.TemporaryRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemporaryRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemporaryRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TemporaryRecordCountAggregateOutputType> | number
          }
        }
      }
      Fee: {
        payload: Prisma.$FeePayload<ExtArgs>
        fields: Prisma.FeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          findFirst: {
            args: Prisma.FeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          findMany: {
            args: Prisma.FeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>[]
          }
          create: {
            args: Prisma.FeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          createMany: {
            args: Prisma.FeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          update: {
            args: Prisma.FeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          deleteMany: {
            args: Prisma.FeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          aggregate: {
            args: Prisma.FeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFee>
          }
          groupBy: {
            args: Prisma.FeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeCountArgs<ExtArgs>
            result: $Utils.Optional<FeeCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Function: {
        payload: Prisma.$FunctionPayload<ExtArgs>
        fields: Prisma.FunctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FunctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FunctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload>
          }
          findFirst: {
            args: Prisma.FunctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FunctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload>
          }
          findMany: {
            args: Prisma.FunctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload>[]
          }
          create: {
            args: Prisma.FunctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload>
          }
          createMany: {
            args: Prisma.FunctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FunctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload>
          }
          update: {
            args: Prisma.FunctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload>
          }
          deleteMany: {
            args: Prisma.FunctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FunctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FunctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FunctionPayload>
          }
          aggregate: {
            args: Prisma.FunctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFunction>
          }
          groupBy: {
            args: Prisma.FunctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FunctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FunctionCountArgs<ExtArgs>
            result: $Utils.Optional<FunctionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resident?: ResidentOmit
    household?: HouseholdOmit
    temporaryRecord?: TemporaryRecordOmit
    fee?: FeeOmit
    bill?: BillOmit
    payment?: PaymentOmit
    function?: FunctionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ResidentCountOutputType
   */

  export type ResidentCountOutputType = {
    temporaryRecord: number
  }

  export type ResidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    temporaryRecord?: boolean | ResidentCountOutputTypeCountTemporaryRecordArgs
  }

  // Custom InputTypes
  /**
   * ResidentCountOutputType without action
   */
  export type ResidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentCountOutputType
     */
    select?: ResidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResidentCountOutputType without action
   */
  export type ResidentCountOutputTypeCountTemporaryRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryRecordWhereInput
  }


  /**
   * Count Type HouseholdCountOutputType
   */

  export type HouseholdCountOutputType = {
    resident: number
    bill: number
  }

  export type HouseholdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | HouseholdCountOutputTypeCountResidentArgs
    bill?: boolean | HouseholdCountOutputTypeCountBillArgs
  }

  // Custom InputTypes
  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdCountOutputType
     */
    select?: HouseholdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountResidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountBillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * Count Type FeeCountOutputType
   */

  export type FeeCountOutputType = {
    bill: number
  }

  export type FeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | FeeCountOutputTypeCountBillArgs
  }

  // Custom InputTypes
  /**
   * FeeCountOutputType without action
   */
  export type FeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeCountOutputType
     */
    select?: FeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeeCountOutputType without action
   */
  export type FeeCountOutputTypeCountBillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    payment: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | BillCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    dateOfBirth: Date | null
    sex: $Enums.Sex | null
    phoneNum: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    role: $Enums.Role | null
    residentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    dateOfBirth: Date | null
    sex: $Enums.Sex | null
    phoneNum: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    role: $Enums.Role | null
    residentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    dateOfBirth: number
    sex: number
    phoneNum: number
    email: number
    password: number
    isActive: number
    role: number
    residentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    dateOfBirth?: true
    sex?: true
    phoneNum?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
    residentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    dateOfBirth?: true
    sex?: true
    phoneNum?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
    residentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    dateOfBirth?: true
    sex?: true
    phoneNum?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
    residentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    dateOfBirth: Date | null
    sex: $Enums.Sex
    phoneNum: string
    email: string
    password: string
    isActive: boolean
    role: $Enums.Role
    residentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    sex?: boolean
    phoneNum?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
    residentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resident?: boolean | User$residentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    sex?: boolean
    phoneNum?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
    residentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "dateOfBirth" | "sex" | "phoneNum" | "email" | "password" | "isActive" | "role" | "residentId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | User$residentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      dateOfBirth: Date | null
      sex: $Enums.Sex
      phoneNum: string
      email: string
      password: string
      isActive: boolean
      role: $Enums.Role
      residentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends User$residentArgs<ExtArgs> = {}>(args?: Subset<T, User$residentArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly sex: FieldRef<"User", 'Sex'>
    readonly phoneNum: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly residentId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resident
   */
  export type User$residentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    where?: ResidentWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resident
   */

  export type AggregateResident = {
    _count: ResidentCountAggregateOutputType | null
    _avg: ResidentAvgAggregateOutputType | null
    _sum: ResidentSumAggregateOutputType | null
    _min: ResidentMinAggregateOutputType | null
    _max: ResidentMaxAggregateOutputType | null
  }

  export type ResidentAvgAggregateOutputType = {
    id: number | null
    householdId: number | null
  }

  export type ResidentSumAggregateOutputType = {
    id: number | null
    householdId: number | null
  }

  export type ResidentMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    identificationNumber: string | null
    status: $Enums.Status | null
    householdId: number | null
  }

  export type ResidentMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    identificationNumber: string | null
    status: $Enums.Status | null
    householdId: number | null
  }

  export type ResidentCountAggregateOutputType = {
    id: number
    fullName: number
    identificationNumber: number
    status: number
    householdId: number
    _all: number
  }


  export type ResidentAvgAggregateInputType = {
    id?: true
    householdId?: true
  }

  export type ResidentSumAggregateInputType = {
    id?: true
    householdId?: true
  }

  export type ResidentMinAggregateInputType = {
    id?: true
    fullName?: true
    identificationNumber?: true
    status?: true
    householdId?: true
  }

  export type ResidentMaxAggregateInputType = {
    id?: true
    fullName?: true
    identificationNumber?: true
    status?: true
    householdId?: true
  }

  export type ResidentCountAggregateInputType = {
    id?: true
    fullName?: true
    identificationNumber?: true
    status?: true
    householdId?: true
    _all?: true
  }

  export type ResidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resident to aggregate.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Residents
    **/
    _count?: true | ResidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidentMaxAggregateInputType
  }

  export type GetResidentAggregateType<T extends ResidentAggregateArgs> = {
        [P in keyof T & keyof AggregateResident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResident[P]>
      : GetScalarType<T[P], AggregateResident[P]>
  }




  export type ResidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentWhereInput
    orderBy?: ResidentOrderByWithAggregationInput | ResidentOrderByWithAggregationInput[]
    by: ResidentScalarFieldEnum[] | ResidentScalarFieldEnum
    having?: ResidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidentCountAggregateInputType | true
    _avg?: ResidentAvgAggregateInputType
    _sum?: ResidentSumAggregateInputType
    _min?: ResidentMinAggregateInputType
    _max?: ResidentMaxAggregateInputType
  }

  export type ResidentGroupByOutputType = {
    id: number
    fullName: string
    identificationNumber: string
    status: $Enums.Status
    householdId: number
    _count: ResidentCountAggregateOutputType | null
    _avg: ResidentAvgAggregateOutputType | null
    _sum: ResidentSumAggregateOutputType | null
    _min: ResidentMinAggregateOutputType | null
    _max: ResidentMaxAggregateOutputType | null
  }

  type GetResidentGroupByPayload<T extends ResidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidentGroupByOutputType[P]>
            : GetScalarType<T[P], ResidentGroupByOutputType[P]>
        }
      >
    >


  export type ResidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    identificationNumber?: boolean
    status?: boolean
    householdId?: boolean
    user?: boolean | Resident$userArgs<ExtArgs>
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    temporaryRecord?: boolean | Resident$temporaryRecordArgs<ExtArgs>
    _count?: boolean | ResidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resident"]>



  export type ResidentSelectScalar = {
    id?: boolean
    fullName?: boolean
    identificationNumber?: boolean
    status?: boolean
    householdId?: boolean
  }

  export type ResidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "identificationNumber" | "status" | "householdId", ExtArgs["result"]["resident"]>
  export type ResidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Resident$userArgs<ExtArgs>
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    temporaryRecord?: boolean | Resident$temporaryRecordArgs<ExtArgs>
    _count?: boolean | ResidentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ResidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resident"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      household: Prisma.$HouseholdPayload<ExtArgs>
      temporaryRecord: Prisma.$TemporaryRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      identificationNumber: string
      status: $Enums.Status
      householdId: number
    }, ExtArgs["result"]["resident"]>
    composites: {}
  }

  type ResidentGetPayload<S extends boolean | null | undefined | ResidentDefaultArgs> = $Result.GetResult<Prisma.$ResidentPayload, S>

  type ResidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidentCountAggregateInputType | true
    }

  export interface ResidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resident'], meta: { name: 'Resident' } }
    /**
     * Find zero or one Resident that matches the filter.
     * @param {ResidentFindUniqueArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidentFindUniqueArgs>(args: SelectSubset<T, ResidentFindUniqueArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidentFindUniqueOrThrowArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidentFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindFirstArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidentFindFirstArgs>(args?: SelectSubset<T, ResidentFindFirstArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindFirstOrThrowArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidentFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Residents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Residents
     * const residents = await prisma.resident.findMany()
     * 
     * // Get first 10 Residents
     * const residents = await prisma.resident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residentWithIdOnly = await prisma.resident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidentFindManyArgs>(args?: SelectSubset<T, ResidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resident.
     * @param {ResidentCreateArgs} args - Arguments to create a Resident.
     * @example
     * // Create one Resident
     * const Resident = await prisma.resident.create({
     *   data: {
     *     // ... data to create a Resident
     *   }
     * })
     * 
     */
    create<T extends ResidentCreateArgs>(args: SelectSubset<T, ResidentCreateArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Residents.
     * @param {ResidentCreateManyArgs} args - Arguments to create many Residents.
     * @example
     * // Create many Residents
     * const resident = await prisma.resident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidentCreateManyArgs>(args?: SelectSubset<T, ResidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resident.
     * @param {ResidentDeleteArgs} args - Arguments to delete one Resident.
     * @example
     * // Delete one Resident
     * const Resident = await prisma.resident.delete({
     *   where: {
     *     // ... filter to delete one Resident
     *   }
     * })
     * 
     */
    delete<T extends ResidentDeleteArgs>(args: SelectSubset<T, ResidentDeleteArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resident.
     * @param {ResidentUpdateArgs} args - Arguments to update one Resident.
     * @example
     * // Update one Resident
     * const resident = await prisma.resident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidentUpdateArgs>(args: SelectSubset<T, ResidentUpdateArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Residents.
     * @param {ResidentDeleteManyArgs} args - Arguments to filter Residents to delete.
     * @example
     * // Delete a few Residents
     * const { count } = await prisma.resident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidentDeleteManyArgs>(args?: SelectSubset<T, ResidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Residents
     * const resident = await prisma.resident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidentUpdateManyArgs>(args: SelectSubset<T, ResidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resident.
     * @param {ResidentUpsertArgs} args - Arguments to update or create a Resident.
     * @example
     * // Update or create a Resident
     * const resident = await prisma.resident.upsert({
     *   create: {
     *     // ... data to create a Resident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resident we want to update
     *   }
     * })
     */
    upsert<T extends ResidentUpsertArgs>(args: SelectSubset<T, ResidentUpsertArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Residents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentCountArgs} args - Arguments to filter Residents to count.
     * @example
     * // Count the number of Residents
     * const count = await prisma.resident.count({
     *   where: {
     *     // ... the filter for the Residents we want to count
     *   }
     * })
    **/
    count<T extends ResidentCountArgs>(
      args?: Subset<T, ResidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResidentAggregateArgs>(args: Subset<T, ResidentAggregateArgs>): Prisma.PrismaPromise<GetResidentAggregateType<T>>

    /**
     * Group by Resident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidentGroupByArgs['orderBy'] }
        : { orderBy?: ResidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resident model
   */
  readonly fields: ResidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Resident$userArgs<ExtArgs> = {}>(args?: Subset<T, Resident$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    temporaryRecord<T extends Resident$temporaryRecordArgs<ExtArgs> = {}>(args?: Subset<T, Resident$temporaryRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resident model
   */
  interface ResidentFieldRefs {
    readonly id: FieldRef<"Resident", 'Int'>
    readonly fullName: FieldRef<"Resident", 'String'>
    readonly identificationNumber: FieldRef<"Resident", 'String'>
    readonly status: FieldRef<"Resident", 'Status'>
    readonly householdId: FieldRef<"Resident", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resident findUnique
   */
  export type ResidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident findUniqueOrThrow
   */
  export type ResidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident findFirst
   */
  export type ResidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residents.
     */
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident findFirstOrThrow
   */
  export type ResidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residents.
     */
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident findMany
   */
  export type ResidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Residents to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident create
   */
  export type ResidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Resident.
     */
    data: XOR<ResidentCreateInput, ResidentUncheckedCreateInput>
  }

  /**
   * Resident createMany
   */
  export type ResidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Residents.
     */
    data: ResidentCreateManyInput | ResidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resident update
   */
  export type ResidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Resident.
     */
    data: XOR<ResidentUpdateInput, ResidentUncheckedUpdateInput>
    /**
     * Choose, which Resident to update.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident updateMany
   */
  export type ResidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Residents.
     */
    data: XOR<ResidentUpdateManyMutationInput, ResidentUncheckedUpdateManyInput>
    /**
     * Filter which Residents to update
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to update.
     */
    limit?: number
  }

  /**
   * Resident upsert
   */
  export type ResidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Resident to update in case it exists.
     */
    where: ResidentWhereUniqueInput
    /**
     * In case the Resident found by the `where` argument doesn't exist, create a new Resident with this data.
     */
    create: XOR<ResidentCreateInput, ResidentUncheckedCreateInput>
    /**
     * In case the Resident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidentUpdateInput, ResidentUncheckedUpdateInput>
  }

  /**
   * Resident delete
   */
  export type ResidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter which Resident to delete.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident deleteMany
   */
  export type ResidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Residents to delete
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to delete.
     */
    limit?: number
  }

  /**
   * Resident.user
   */
  export type Resident$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Resident.temporaryRecord
   */
  export type Resident$temporaryRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    where?: TemporaryRecordWhereInput
    orderBy?: TemporaryRecordOrderByWithRelationInput | TemporaryRecordOrderByWithRelationInput[]
    cursor?: TemporaryRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemporaryRecordScalarFieldEnum | TemporaryRecordScalarFieldEnum[]
  }

  /**
   * Resident without action
   */
  export type ResidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
  }


  /**
   * Model Household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _avg: HouseholdAvgAggregateOutputType | null
    _sum: HouseholdSumAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdAvgAggregateOutputType = {
    id: number | null
    roomNumber: number | null
  }

  export type HouseholdSumAggregateOutputType = {
    id: number | null
    roomNumber: number | null
  }

  export type HouseholdMinAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdMaxAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdCountAggregateOutputType = {
    id: number
    roomNumber: number
    owner: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HouseholdAvgAggregateInputType = {
    id?: true
    roomNumber?: true
  }

  export type HouseholdSumAggregateInputType = {
    id?: true
    roomNumber?: true
  }

  export type HouseholdMinAggregateInputType = {
    id?: true
    roomNumber?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdCountAggregateInputType = {
    id?: true
    roomNumber?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Household to aggregate.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseholdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseholdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type HouseholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithAggregationInput | HouseholdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: HouseholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _avg?: HouseholdAvgAggregateInputType
    _sum?: HouseholdSumAggregateInputType
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    id: number
    roomNumber: number
    owner: string | null
    createdAt: Date
    updatedAt: Date
    _count: HouseholdCountAggregateOutputType | null
    _avg: HouseholdAvgAggregateOutputType | null
    _sum: HouseholdSumAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends HouseholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resident?: boolean | Household$residentArgs<ExtArgs>
    bill?: boolean | Household$billArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>



  export type HouseholdSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HouseholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "owner" | "createdAt" | "updatedAt", ExtArgs["result"]["household"]>
  export type HouseholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | Household$residentArgs<ExtArgs>
    bill?: boolean | Household$billArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HouseholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Household"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>[]
      bill: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: number
      owner: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type HouseholdGetPayload<S extends boolean | null | undefined | HouseholdDefaultArgs> = $Result.GetResult<Prisma.$HouseholdPayload, S>

  type HouseholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface HouseholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Household'], meta: { name: 'Household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {HouseholdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdFindUniqueArgs>(args: SelectSubset<T, HouseholdFindUniqueArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdFindFirstArgs>(args?: SelectSubset<T, HouseholdFindFirstArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdWithIdOnly = await prisma.household.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseholdFindManyArgs>(args?: SelectSubset<T, HouseholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Household.
     * @param {HouseholdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends HouseholdCreateArgs>(args: SelectSubset<T, HouseholdCreateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Households.
     * @param {HouseholdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdCreateManyArgs>(args?: SelectSubset<T, HouseholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Household.
     * @param {HouseholdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends HouseholdDeleteArgs>(args: SelectSubset<T, HouseholdDeleteArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Household.
     * @param {HouseholdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdUpdateArgs>(args: SelectSubset<T, HouseholdUpdateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Households.
     * @param {HouseholdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdDeleteManyArgs>(args?: SelectSubset<T, HouseholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdUpdateManyArgs>(args: SelectSubset<T, HouseholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Household.
     * @param {HouseholdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdUpsertArgs>(args: SelectSubset<T, HouseholdUpsertArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends HouseholdCountArgs>(
      args?: Subset<T, HouseholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Household model
   */
  readonly fields: HouseholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends Household$residentArgs<ExtArgs> = {}>(args?: Subset<T, Household$residentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bill<T extends Household$billArgs<ExtArgs> = {}>(args?: Subset<T, Household$billArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Household model
   */
  interface HouseholdFieldRefs {
    readonly id: FieldRef<"Household", 'Int'>
    readonly roomNumber: FieldRef<"Household", 'Int'>
    readonly owner: FieldRef<"Household", 'String'>
    readonly createdAt: FieldRef<"Household", 'DateTime'>
    readonly updatedAt: FieldRef<"Household", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Household findUnique
   */
  export type HouseholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findUniqueOrThrow
   */
  export type HouseholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findFirst
   */
  export type HouseholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findFirstOrThrow
   */
  export type HouseholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findMany
   */
  export type HouseholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Households to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household create
   */
  export type HouseholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to create a Household.
     */
    data: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
  }

  /**
   * Household createMany
   */
  export type HouseholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household update
   */
  export type HouseholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to update a Household.
     */
    data: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
    /**
     * Choose, which Household to update.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household updateMany
   */
  export type HouseholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household upsert
   */
  export type HouseholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The filter to search for the Household to update in case it exists.
     */
    where: HouseholdWhereUniqueInput
    /**
     * In case the Household found by the `where` argument doesn't exist, create a new Household with this data.
     */
    create: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
    /**
     * In case the Household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
  }

  /**
   * Household delete
   */
  export type HouseholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter which Household to delete.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household deleteMany
   */
  export type HouseholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Households to delete
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to delete.
     */
    limit?: number
  }

  /**
   * Household.resident
   */
  export type Household$residentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    where?: ResidentWhereInput
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    cursor?: ResidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Household.bill
   */
  export type Household$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Household without action
   */
  export type HouseholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
  }


  /**
   * Model TemporaryRecord
   */

  export type AggregateTemporaryRecord = {
    _count: TemporaryRecordCountAggregateOutputType | null
    _avg: TemporaryRecordAvgAggregateOutputType | null
    _sum: TemporaryRecordSumAggregateOutputType | null
    _min: TemporaryRecordMinAggregateOutputType | null
    _max: TemporaryRecordMaxAggregateOutputType | null
  }

  export type TemporaryRecordAvgAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type TemporaryRecordSumAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type TemporaryRecordMinAggregateOutputType = {
    id: number | null
    residentId: number | null
    type: $Enums.Type | null
    startDate: Date | null
    endDate: Date | null
  }

  export type TemporaryRecordMaxAggregateOutputType = {
    id: number | null
    residentId: number | null
    type: $Enums.Type | null
    startDate: Date | null
    endDate: Date | null
  }

  export type TemporaryRecordCountAggregateOutputType = {
    id: number
    residentId: number
    type: number
    startDate: number
    endDate: number
    _all: number
  }


  export type TemporaryRecordAvgAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type TemporaryRecordSumAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type TemporaryRecordMinAggregateInputType = {
    id?: true
    residentId?: true
    type?: true
    startDate?: true
    endDate?: true
  }

  export type TemporaryRecordMaxAggregateInputType = {
    id?: true
    residentId?: true
    type?: true
    startDate?: true
    endDate?: true
  }

  export type TemporaryRecordCountAggregateInputType = {
    id?: true
    residentId?: true
    type?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type TemporaryRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryRecord to aggregate.
     */
    where?: TemporaryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryRecords to fetch.
     */
    orderBy?: TemporaryRecordOrderByWithRelationInput | TemporaryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemporaryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemporaryRecords
    **/
    _count?: true | TemporaryRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemporaryRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemporaryRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemporaryRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemporaryRecordMaxAggregateInputType
  }

  export type GetTemporaryRecordAggregateType<T extends TemporaryRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTemporaryRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemporaryRecord[P]>
      : GetScalarType<T[P], AggregateTemporaryRecord[P]>
  }




  export type TemporaryRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryRecordWhereInput
    orderBy?: TemporaryRecordOrderByWithAggregationInput | TemporaryRecordOrderByWithAggregationInput[]
    by: TemporaryRecordScalarFieldEnum[] | TemporaryRecordScalarFieldEnum
    having?: TemporaryRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemporaryRecordCountAggregateInputType | true
    _avg?: TemporaryRecordAvgAggregateInputType
    _sum?: TemporaryRecordSumAggregateInputType
    _min?: TemporaryRecordMinAggregateInputType
    _max?: TemporaryRecordMaxAggregateInputType
  }

  export type TemporaryRecordGroupByOutputType = {
    id: number
    residentId: number
    type: $Enums.Type
    startDate: Date
    endDate: Date
    _count: TemporaryRecordCountAggregateOutputType | null
    _avg: TemporaryRecordAvgAggregateOutputType | null
    _sum: TemporaryRecordSumAggregateOutputType | null
    _min: TemporaryRecordMinAggregateOutputType | null
    _max: TemporaryRecordMaxAggregateOutputType | null
  }

  type GetTemporaryRecordGroupByPayload<T extends TemporaryRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemporaryRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemporaryRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemporaryRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TemporaryRecordGroupByOutputType[P]>
        }
      >
    >


  export type TemporaryRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temporaryRecord"]>



  export type TemporaryRecordSelectScalar = {
    id?: boolean
    residentId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type TemporaryRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "type" | "startDate" | "endDate", ExtArgs["result"]["temporaryRecord"]>
  export type TemporaryRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }

  export type $TemporaryRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemporaryRecord"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentId: number
      type: $Enums.Type
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["temporaryRecord"]>
    composites: {}
  }

  type TemporaryRecordGetPayload<S extends boolean | null | undefined | TemporaryRecordDefaultArgs> = $Result.GetResult<Prisma.$TemporaryRecordPayload, S>

  type TemporaryRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemporaryRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemporaryRecordCountAggregateInputType | true
    }

  export interface TemporaryRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemporaryRecord'], meta: { name: 'TemporaryRecord' } }
    /**
     * Find zero or one TemporaryRecord that matches the filter.
     * @param {TemporaryRecordFindUniqueArgs} args - Arguments to find a TemporaryRecord
     * @example
     * // Get one TemporaryRecord
     * const temporaryRecord = await prisma.temporaryRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemporaryRecordFindUniqueArgs>(args: SelectSubset<T, TemporaryRecordFindUniqueArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemporaryRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemporaryRecordFindUniqueOrThrowArgs} args - Arguments to find a TemporaryRecord
     * @example
     * // Get one TemporaryRecord
     * const temporaryRecord = await prisma.temporaryRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemporaryRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TemporaryRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryRecordFindFirstArgs} args - Arguments to find a TemporaryRecord
     * @example
     * // Get one TemporaryRecord
     * const temporaryRecord = await prisma.temporaryRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemporaryRecordFindFirstArgs>(args?: SelectSubset<T, TemporaryRecordFindFirstArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryRecordFindFirstOrThrowArgs} args - Arguments to find a TemporaryRecord
     * @example
     * // Get one TemporaryRecord
     * const temporaryRecord = await prisma.temporaryRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemporaryRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TemporaryRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemporaryRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemporaryRecords
     * const temporaryRecords = await prisma.temporaryRecord.findMany()
     * 
     * // Get first 10 TemporaryRecords
     * const temporaryRecords = await prisma.temporaryRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temporaryRecordWithIdOnly = await prisma.temporaryRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemporaryRecordFindManyArgs>(args?: SelectSubset<T, TemporaryRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemporaryRecord.
     * @param {TemporaryRecordCreateArgs} args - Arguments to create a TemporaryRecord.
     * @example
     * // Create one TemporaryRecord
     * const TemporaryRecord = await prisma.temporaryRecord.create({
     *   data: {
     *     // ... data to create a TemporaryRecord
     *   }
     * })
     * 
     */
    create<T extends TemporaryRecordCreateArgs>(args: SelectSubset<T, TemporaryRecordCreateArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemporaryRecords.
     * @param {TemporaryRecordCreateManyArgs} args - Arguments to create many TemporaryRecords.
     * @example
     * // Create many TemporaryRecords
     * const temporaryRecord = await prisma.temporaryRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemporaryRecordCreateManyArgs>(args?: SelectSubset<T, TemporaryRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TemporaryRecord.
     * @param {TemporaryRecordDeleteArgs} args - Arguments to delete one TemporaryRecord.
     * @example
     * // Delete one TemporaryRecord
     * const TemporaryRecord = await prisma.temporaryRecord.delete({
     *   where: {
     *     // ... filter to delete one TemporaryRecord
     *   }
     * })
     * 
     */
    delete<T extends TemporaryRecordDeleteArgs>(args: SelectSubset<T, TemporaryRecordDeleteArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemporaryRecord.
     * @param {TemporaryRecordUpdateArgs} args - Arguments to update one TemporaryRecord.
     * @example
     * // Update one TemporaryRecord
     * const temporaryRecord = await prisma.temporaryRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemporaryRecordUpdateArgs>(args: SelectSubset<T, TemporaryRecordUpdateArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemporaryRecords.
     * @param {TemporaryRecordDeleteManyArgs} args - Arguments to filter TemporaryRecords to delete.
     * @example
     * // Delete a few TemporaryRecords
     * const { count } = await prisma.temporaryRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemporaryRecordDeleteManyArgs>(args?: SelectSubset<T, TemporaryRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemporaryRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemporaryRecords
     * const temporaryRecord = await prisma.temporaryRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemporaryRecordUpdateManyArgs>(args: SelectSubset<T, TemporaryRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemporaryRecord.
     * @param {TemporaryRecordUpsertArgs} args - Arguments to update or create a TemporaryRecord.
     * @example
     * // Update or create a TemporaryRecord
     * const temporaryRecord = await prisma.temporaryRecord.upsert({
     *   create: {
     *     // ... data to create a TemporaryRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemporaryRecord we want to update
     *   }
     * })
     */
    upsert<T extends TemporaryRecordUpsertArgs>(args: SelectSubset<T, TemporaryRecordUpsertArgs<ExtArgs>>): Prisma__TemporaryRecordClient<$Result.GetResult<Prisma.$TemporaryRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemporaryRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryRecordCountArgs} args - Arguments to filter TemporaryRecords to count.
     * @example
     * // Count the number of TemporaryRecords
     * const count = await prisma.temporaryRecord.count({
     *   where: {
     *     // ... the filter for the TemporaryRecords we want to count
     *   }
     * })
    **/
    count<T extends TemporaryRecordCountArgs>(
      args?: Subset<T, TemporaryRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemporaryRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemporaryRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemporaryRecordAggregateArgs>(args: Subset<T, TemporaryRecordAggregateArgs>): Prisma.PrismaPromise<GetTemporaryRecordAggregateType<T>>

    /**
     * Group by TemporaryRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemporaryRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemporaryRecordGroupByArgs['orderBy'] }
        : { orderBy?: TemporaryRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemporaryRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemporaryRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemporaryRecord model
   */
  readonly fields: TemporaryRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemporaryRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemporaryRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends ResidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidentDefaultArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemporaryRecord model
   */
  interface TemporaryRecordFieldRefs {
    readonly id: FieldRef<"TemporaryRecord", 'Int'>
    readonly residentId: FieldRef<"TemporaryRecord", 'Int'>
    readonly type: FieldRef<"TemporaryRecord", 'Type'>
    readonly startDate: FieldRef<"TemporaryRecord", 'DateTime'>
    readonly endDate: FieldRef<"TemporaryRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemporaryRecord findUnique
   */
  export type TemporaryRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryRecord to fetch.
     */
    where: TemporaryRecordWhereUniqueInput
  }

  /**
   * TemporaryRecord findUniqueOrThrow
   */
  export type TemporaryRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryRecord to fetch.
     */
    where: TemporaryRecordWhereUniqueInput
  }

  /**
   * TemporaryRecord findFirst
   */
  export type TemporaryRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryRecord to fetch.
     */
    where?: TemporaryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryRecords to fetch.
     */
    orderBy?: TemporaryRecordOrderByWithRelationInput | TemporaryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryRecords.
     */
    cursor?: TemporaryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryRecords.
     */
    distinct?: TemporaryRecordScalarFieldEnum | TemporaryRecordScalarFieldEnum[]
  }

  /**
   * TemporaryRecord findFirstOrThrow
   */
  export type TemporaryRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryRecord to fetch.
     */
    where?: TemporaryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryRecords to fetch.
     */
    orderBy?: TemporaryRecordOrderByWithRelationInput | TemporaryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryRecords.
     */
    cursor?: TemporaryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryRecords.
     */
    distinct?: TemporaryRecordScalarFieldEnum | TemporaryRecordScalarFieldEnum[]
  }

  /**
   * TemporaryRecord findMany
   */
  export type TemporaryRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryRecords to fetch.
     */
    where?: TemporaryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryRecords to fetch.
     */
    orderBy?: TemporaryRecordOrderByWithRelationInput | TemporaryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemporaryRecords.
     */
    cursor?: TemporaryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryRecords.
     */
    skip?: number
    distinct?: TemporaryRecordScalarFieldEnum | TemporaryRecordScalarFieldEnum[]
  }

  /**
   * TemporaryRecord create
   */
  export type TemporaryRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TemporaryRecord.
     */
    data: XOR<TemporaryRecordCreateInput, TemporaryRecordUncheckedCreateInput>
  }

  /**
   * TemporaryRecord createMany
   */
  export type TemporaryRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemporaryRecords.
     */
    data: TemporaryRecordCreateManyInput | TemporaryRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemporaryRecord update
   */
  export type TemporaryRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TemporaryRecord.
     */
    data: XOR<TemporaryRecordUpdateInput, TemporaryRecordUncheckedUpdateInput>
    /**
     * Choose, which TemporaryRecord to update.
     */
    where: TemporaryRecordWhereUniqueInput
  }

  /**
   * TemporaryRecord updateMany
   */
  export type TemporaryRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemporaryRecords.
     */
    data: XOR<TemporaryRecordUpdateManyMutationInput, TemporaryRecordUncheckedUpdateManyInput>
    /**
     * Filter which TemporaryRecords to update
     */
    where?: TemporaryRecordWhereInput
    /**
     * Limit how many TemporaryRecords to update.
     */
    limit?: number
  }

  /**
   * TemporaryRecord upsert
   */
  export type TemporaryRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TemporaryRecord to update in case it exists.
     */
    where: TemporaryRecordWhereUniqueInput
    /**
     * In case the TemporaryRecord found by the `where` argument doesn't exist, create a new TemporaryRecord with this data.
     */
    create: XOR<TemporaryRecordCreateInput, TemporaryRecordUncheckedCreateInput>
    /**
     * In case the TemporaryRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemporaryRecordUpdateInput, TemporaryRecordUncheckedUpdateInput>
  }

  /**
   * TemporaryRecord delete
   */
  export type TemporaryRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
    /**
     * Filter which TemporaryRecord to delete.
     */
    where: TemporaryRecordWhereUniqueInput
  }

  /**
   * TemporaryRecord deleteMany
   */
  export type TemporaryRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryRecords to delete
     */
    where?: TemporaryRecordWhereInput
    /**
     * Limit how many TemporaryRecords to delete.
     */
    limit?: number
  }

  /**
   * TemporaryRecord without action
   */
  export type TemporaryRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryRecord
     */
    select?: TemporaryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryRecord
     */
    omit?: TemporaryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryRecordInclude<ExtArgs> | null
  }


  /**
   * Model Fee
   */

  export type AggregateFee = {
    _count: FeeCountAggregateOutputType | null
    _avg: FeeAvgAggregateOutputType | null
    _sum: FeeSumAggregateOutputType | null
    _min: FeeMinAggregateOutputType | null
    _max: FeeMaxAggregateOutputType | null
  }

  export type FeeAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type FeeSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type FeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    amount: number | null
    cycle: $Enums.Cycle | null
  }

  export type FeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    amount: number | null
    cycle: $Enums.Cycle | null
  }

  export type FeeCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    cycle: number
    _all: number
  }


  export type FeeAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type FeeSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type FeeMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    cycle?: true
  }

  export type FeeMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    cycle?: true
  }

  export type FeeCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    cycle?: true
    _all?: true
  }

  export type FeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fee to aggregate.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fees
    **/
    _count?: true | FeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeMaxAggregateInputType
  }

  export type GetFeeAggregateType<T extends FeeAggregateArgs> = {
        [P in keyof T & keyof AggregateFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFee[P]>
      : GetScalarType<T[P], AggregateFee[P]>
  }




  export type FeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeWhereInput
    orderBy?: FeeOrderByWithAggregationInput | FeeOrderByWithAggregationInput[]
    by: FeeScalarFieldEnum[] | FeeScalarFieldEnum
    having?: FeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeCountAggregateInputType | true
    _avg?: FeeAvgAggregateInputType
    _sum?: FeeSumAggregateInputType
    _min?: FeeMinAggregateInputType
    _max?: FeeMaxAggregateInputType
  }

  export type FeeGroupByOutputType = {
    id: number
    name: string
    amount: number
    cycle: $Enums.Cycle
    _count: FeeCountAggregateOutputType | null
    _avg: FeeAvgAggregateOutputType | null
    _sum: FeeSumAggregateOutputType | null
    _min: FeeMinAggregateOutputType | null
    _max: FeeMaxAggregateOutputType | null
  }

  type GetFeeGroupByPayload<T extends FeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeGroupByOutputType[P]>
            : GetScalarType<T[P], FeeGroupByOutputType[P]>
        }
      >
    >


  export type FeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    cycle?: boolean
    bill?: boolean | Fee$billArgs<ExtArgs>
    _count?: boolean | FeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fee"]>



  export type FeeSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    cycle?: boolean
  }

  export type FeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "amount" | "cycle", ExtArgs["result"]["fee"]>
  export type FeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | Fee$billArgs<ExtArgs>
    _count?: boolean | FeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fee"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      amount: number
      cycle: $Enums.Cycle
    }, ExtArgs["result"]["fee"]>
    composites: {}
  }

  type FeeGetPayload<S extends boolean | null | undefined | FeeDefaultArgs> = $Result.GetResult<Prisma.$FeePayload, S>

  type FeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeCountAggregateInputType | true
    }

  export interface FeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fee'], meta: { name: 'Fee' } }
    /**
     * Find zero or one Fee that matches the filter.
     * @param {FeeFindUniqueArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeFindUniqueArgs>(args: SelectSubset<T, FeeFindUniqueArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeFindUniqueOrThrowArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeFindFirstArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeFindFirstArgs>(args?: SelectSubset<T, FeeFindFirstArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeFindFirstOrThrowArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fees
     * const fees = await prisma.fee.findMany()
     * 
     * // Get first 10 Fees
     * const fees = await prisma.fee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeWithIdOnly = await prisma.fee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeFindManyArgs>(args?: SelectSubset<T, FeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fee.
     * @param {FeeCreateArgs} args - Arguments to create a Fee.
     * @example
     * // Create one Fee
     * const Fee = await prisma.fee.create({
     *   data: {
     *     // ... data to create a Fee
     *   }
     * })
     * 
     */
    create<T extends FeeCreateArgs>(args: SelectSubset<T, FeeCreateArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fees.
     * @param {FeeCreateManyArgs} args - Arguments to create many Fees.
     * @example
     * // Create many Fees
     * const fee = await prisma.fee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeCreateManyArgs>(args?: SelectSubset<T, FeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fee.
     * @param {FeeDeleteArgs} args - Arguments to delete one Fee.
     * @example
     * // Delete one Fee
     * const Fee = await prisma.fee.delete({
     *   where: {
     *     // ... filter to delete one Fee
     *   }
     * })
     * 
     */
    delete<T extends FeeDeleteArgs>(args: SelectSubset<T, FeeDeleteArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fee.
     * @param {FeeUpdateArgs} args - Arguments to update one Fee.
     * @example
     * // Update one Fee
     * const fee = await prisma.fee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeUpdateArgs>(args: SelectSubset<T, FeeUpdateArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fees.
     * @param {FeeDeleteManyArgs} args - Arguments to filter Fees to delete.
     * @example
     * // Delete a few Fees
     * const { count } = await prisma.fee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeDeleteManyArgs>(args?: SelectSubset<T, FeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fees
     * const fee = await prisma.fee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeUpdateManyArgs>(args: SelectSubset<T, FeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fee.
     * @param {FeeUpsertArgs} args - Arguments to update or create a Fee.
     * @example
     * // Update or create a Fee
     * const fee = await prisma.fee.upsert({
     *   create: {
     *     // ... data to create a Fee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fee we want to update
     *   }
     * })
     */
    upsert<T extends FeeUpsertArgs>(args: SelectSubset<T, FeeUpsertArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeCountArgs} args - Arguments to filter Fees to count.
     * @example
     * // Count the number of Fees
     * const count = await prisma.fee.count({
     *   where: {
     *     // ... the filter for the Fees we want to count
     *   }
     * })
    **/
    count<T extends FeeCountArgs>(
      args?: Subset<T, FeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeeAggregateArgs>(args: Subset<T, FeeAggregateArgs>): Prisma.PrismaPromise<GetFeeAggregateType<T>>

    /**
     * Group by Fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeGroupByArgs['orderBy'] }
        : { orderBy?: FeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fee model
   */
  readonly fields: FeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends Fee$billArgs<ExtArgs> = {}>(args?: Subset<T, Fee$billArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fee model
   */
  interface FeeFieldRefs {
    readonly id: FieldRef<"Fee", 'Int'>
    readonly name: FieldRef<"Fee", 'String'>
    readonly amount: FieldRef<"Fee", 'Int'>
    readonly cycle: FieldRef<"Fee", 'Cycle'>
  }
    

  // Custom InputTypes
  /**
   * Fee findUnique
   */
  export type FeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee findUniqueOrThrow
   */
  export type FeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee findFirst
   */
  export type FeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees.
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees.
     */
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Fee findFirstOrThrow
   */
  export type FeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees.
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees.
     */
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Fee findMany
   */
  export type FeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fees to fetch.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fees.
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Fee create
   */
  export type FeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Fee.
     */
    data: XOR<FeeCreateInput, FeeUncheckedCreateInput>
  }

  /**
   * Fee createMany
   */
  export type FeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fees.
     */
    data: FeeCreateManyInput | FeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fee update
   */
  export type FeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Fee.
     */
    data: XOR<FeeUpdateInput, FeeUncheckedUpdateInput>
    /**
     * Choose, which Fee to update.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee updateMany
   */
  export type FeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fees.
     */
    data: XOR<FeeUpdateManyMutationInput, FeeUncheckedUpdateManyInput>
    /**
     * Filter which Fees to update
     */
    where?: FeeWhereInput
    /**
     * Limit how many Fees to update.
     */
    limit?: number
  }

  /**
   * Fee upsert
   */
  export type FeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Fee to update in case it exists.
     */
    where: FeeWhereUniqueInput
    /**
     * In case the Fee found by the `where` argument doesn't exist, create a new Fee with this data.
     */
    create: XOR<FeeCreateInput, FeeUncheckedCreateInput>
    /**
     * In case the Fee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeUpdateInput, FeeUncheckedUpdateInput>
  }

  /**
   * Fee delete
   */
  export type FeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter which Fee to delete.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee deleteMany
   */
  export type FeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees to delete
     */
    where?: FeeWhereInput
    /**
     * Limit how many Fees to delete.
     */
    limit?: number
  }

  /**
   * Fee.bill
   */
  export type Fee$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Fee without action
   */
  export type FeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    id: number | null
    feeId: number | null
    householdId: number | null
    total: number | null
  }

  export type BillSumAggregateOutputType = {
    id: number | null
    feeId: number | null
    householdId: number | null
    total: number | null
  }

  export type BillMinAggregateOutputType = {
    id: number | null
    feeId: number | null
    householdId: number | null
    total: number | null
    paidStatus: $Enums.PaidStatus | null
  }

  export type BillMaxAggregateOutputType = {
    id: number | null
    feeId: number | null
    householdId: number | null
    total: number | null
    paidStatus: $Enums.PaidStatus | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    feeId: number
    householdId: number
    total: number
    paidStatus: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    id?: true
    feeId?: true
    householdId?: true
    total?: true
  }

  export type BillSumAggregateInputType = {
    id?: true
    feeId?: true
    householdId?: true
    total?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    feeId?: true
    householdId?: true
    total?: true
    paidStatus?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    feeId?: true
    householdId?: true
    total?: true
    paidStatus?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    feeId?: true
    householdId?: true
    total?: true
    paidStatus?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: number
    feeId: number
    householdId: number
    total: number
    paidStatus: $Enums.PaidStatus
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feeId?: boolean
    householdId?: boolean
    total?: boolean
    paidStatus?: boolean
    fee?: boolean | FeeDefaultArgs<ExtArgs>
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    payment?: boolean | Bill$paymentArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>



  export type BillSelectScalar = {
    id?: boolean
    feeId?: boolean
    householdId?: boolean
    total?: boolean
    paidStatus?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feeId" | "householdId" | "total" | "paidStatus", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fee?: boolean | FeeDefaultArgs<ExtArgs>
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    payment?: boolean | Bill$paymentArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      fee: Prisma.$FeePayload<ExtArgs>
      household: Prisma.$HouseholdPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      feeId: number
      householdId: number
      total: number
      paidStatus: $Enums.PaidStatus
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fee<T extends FeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeeDefaultArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Bill$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Bill$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'Int'>
    readonly feeId: FieldRef<"Bill", 'Int'>
    readonly householdId: FieldRef<"Bill", 'Int'>
    readonly total: FieldRef<"Bill", 'Int'>
    readonly paidStatus: FieldRef<"Bill", 'PaidStatus'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill.payment
   */
  export type Bill$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    billId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    billId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    billId: number | null
    paidAt: Date | null
    amount: number | null
    method: $Enums.Method | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    billId: number | null
    paidAt: Date | null
    amount: number | null
    method: $Enums.Method | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    billId: number
    paidAt: number
    amount: number
    method: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    billId?: true
    paidAt?: true
    amount?: true
    method?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    billId?: true
    paidAt?: true
    amount?: true
    method?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    billId?: true
    paidAt?: true
    amount?: true
    method?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    billId: number
    paidAt: Date
    amount: number
    method: $Enums.Method
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    paidAt?: boolean
    amount?: boolean
    method?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    billId?: boolean
    paidAt?: boolean
    amount?: boolean
    method?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "paidAt" | "amount" | "method", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      billId: number
      paidAt: Date
      amount: number
      method: $Enums.Method
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly billId: FieldRef<"Payment", 'Int'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly method: FieldRef<"Payment", 'Method'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Function
   */

  export type AggregateFunction = {
    _count: FunctionCountAggregateOutputType | null
    _avg: FunctionAvgAggregateOutputType | null
    _sum: FunctionSumAggregateOutputType | null
    _min: FunctionMinAggregateOutputType | null
    _max: FunctionMaxAggregateOutputType | null
  }

  export type FunctionAvgAggregateOutputType = {
    id: number | null
  }

  export type FunctionSumAggregateOutputType = {
    id: number | null
  }

  export type FunctionMinAggregateOutputType = {
    id: number | null
    name: string | null
    groupName: string | null
    component: string | null
    role: $Enums.Role | null
  }

  export type FunctionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    groupName: string | null
    component: string | null
    role: $Enums.Role | null
  }

  export type FunctionCountAggregateOutputType = {
    id: number
    name: number
    groupName: number
    component: number
    role: number
    _all: number
  }


  export type FunctionAvgAggregateInputType = {
    id?: true
  }

  export type FunctionSumAggregateInputType = {
    id?: true
  }

  export type FunctionMinAggregateInputType = {
    id?: true
    name?: true
    groupName?: true
    component?: true
    role?: true
  }

  export type FunctionMaxAggregateInputType = {
    id?: true
    name?: true
    groupName?: true
    component?: true
    role?: true
  }

  export type FunctionCountAggregateInputType = {
    id?: true
    name?: true
    groupName?: true
    component?: true
    role?: true
    _all?: true
  }

  export type FunctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Function to aggregate.
     */
    where?: FunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Functions to fetch.
     */
    orderBy?: FunctionOrderByWithRelationInput | FunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Functions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Functions
    **/
    _count?: true | FunctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FunctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FunctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FunctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FunctionMaxAggregateInputType
  }

  export type GetFunctionAggregateType<T extends FunctionAggregateArgs> = {
        [P in keyof T & keyof AggregateFunction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFunction[P]>
      : GetScalarType<T[P], AggregateFunction[P]>
  }




  export type FunctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FunctionWhereInput
    orderBy?: FunctionOrderByWithAggregationInput | FunctionOrderByWithAggregationInput[]
    by: FunctionScalarFieldEnum[] | FunctionScalarFieldEnum
    having?: FunctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FunctionCountAggregateInputType | true
    _avg?: FunctionAvgAggregateInputType
    _sum?: FunctionSumAggregateInputType
    _min?: FunctionMinAggregateInputType
    _max?: FunctionMaxAggregateInputType
  }

  export type FunctionGroupByOutputType = {
    id: number
    name: string
    groupName: string
    component: string
    role: $Enums.Role
    _count: FunctionCountAggregateOutputType | null
    _avg: FunctionAvgAggregateOutputType | null
    _sum: FunctionSumAggregateOutputType | null
    _min: FunctionMinAggregateOutputType | null
    _max: FunctionMaxAggregateOutputType | null
  }

  type GetFunctionGroupByPayload<T extends FunctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FunctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FunctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FunctionGroupByOutputType[P]>
            : GetScalarType<T[P], FunctionGroupByOutputType[P]>
        }
      >
    >


  export type FunctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groupName?: boolean
    component?: boolean
    role?: boolean
  }, ExtArgs["result"]["function"]>



  export type FunctionSelectScalar = {
    id?: boolean
    name?: boolean
    groupName?: boolean
    component?: boolean
    role?: boolean
  }

  export type FunctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "groupName" | "component" | "role", ExtArgs["result"]["function"]>

  export type $FunctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Function"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      groupName: string
      component: string
      role: $Enums.Role
    }, ExtArgs["result"]["function"]>
    composites: {}
  }

  type FunctionGetPayload<S extends boolean | null | undefined | FunctionDefaultArgs> = $Result.GetResult<Prisma.$FunctionPayload, S>

  type FunctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FunctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FunctionCountAggregateInputType | true
    }

  export interface FunctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Function'], meta: { name: 'Function' } }
    /**
     * Find zero or one Function that matches the filter.
     * @param {FunctionFindUniqueArgs} args - Arguments to find a Function
     * @example
     * // Get one Function
     * const function = await prisma.function.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FunctionFindUniqueArgs>(args: SelectSubset<T, FunctionFindUniqueArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Function that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FunctionFindUniqueOrThrowArgs} args - Arguments to find a Function
     * @example
     * // Get one Function
     * const function = await prisma.function.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FunctionFindUniqueOrThrowArgs>(args: SelectSubset<T, FunctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Function that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunctionFindFirstArgs} args - Arguments to find a Function
     * @example
     * // Get one Function
     * const function = await prisma.function.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FunctionFindFirstArgs>(args?: SelectSubset<T, FunctionFindFirstArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Function that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunctionFindFirstOrThrowArgs} args - Arguments to find a Function
     * @example
     * // Get one Function
     * const function = await prisma.function.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FunctionFindFirstOrThrowArgs>(args?: SelectSubset<T, FunctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Functions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Functions
     * const functions = await prisma.function.findMany()
     * 
     * // Get first 10 Functions
     * const functions = await prisma.function.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const functionWithIdOnly = await prisma.function.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FunctionFindManyArgs>(args?: SelectSubset<T, FunctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Function.
     * @param {FunctionCreateArgs} args - Arguments to create a Function.
     * @example
     * // Create one Function
     * const Function = await prisma.function.create({
     *   data: {
     *     // ... data to create a Function
     *   }
     * })
     * 
     */
    create<T extends FunctionCreateArgs>(args: SelectSubset<T, FunctionCreateArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Functions.
     * @param {FunctionCreateManyArgs} args - Arguments to create many Functions.
     * @example
     * // Create many Functions
     * const function = await prisma.function.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FunctionCreateManyArgs>(args?: SelectSubset<T, FunctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Function.
     * @param {FunctionDeleteArgs} args - Arguments to delete one Function.
     * @example
     * // Delete one Function
     * const Function = await prisma.function.delete({
     *   where: {
     *     // ... filter to delete one Function
     *   }
     * })
     * 
     */
    delete<T extends FunctionDeleteArgs>(args: SelectSubset<T, FunctionDeleteArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Function.
     * @param {FunctionUpdateArgs} args - Arguments to update one Function.
     * @example
     * // Update one Function
     * const function = await prisma.function.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FunctionUpdateArgs>(args: SelectSubset<T, FunctionUpdateArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Functions.
     * @param {FunctionDeleteManyArgs} args - Arguments to filter Functions to delete.
     * @example
     * // Delete a few Functions
     * const { count } = await prisma.function.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FunctionDeleteManyArgs>(args?: SelectSubset<T, FunctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Functions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Functions
     * const function = await prisma.function.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FunctionUpdateManyArgs>(args: SelectSubset<T, FunctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Function.
     * @param {FunctionUpsertArgs} args - Arguments to update or create a Function.
     * @example
     * // Update or create a Function
     * const function = await prisma.function.upsert({
     *   create: {
     *     // ... data to create a Function
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Function we want to update
     *   }
     * })
     */
    upsert<T extends FunctionUpsertArgs>(args: SelectSubset<T, FunctionUpsertArgs<ExtArgs>>): Prisma__FunctionClient<$Result.GetResult<Prisma.$FunctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Functions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunctionCountArgs} args - Arguments to filter Functions to count.
     * @example
     * // Count the number of Functions
     * const count = await prisma.function.count({
     *   where: {
     *     // ... the filter for the Functions we want to count
     *   }
     * })
    **/
    count<T extends FunctionCountArgs>(
      args?: Subset<T, FunctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FunctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Function.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FunctionAggregateArgs>(args: Subset<T, FunctionAggregateArgs>): Prisma.PrismaPromise<GetFunctionAggregateType<T>>

    /**
     * Group by Function.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunctionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FunctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FunctionGroupByArgs['orderBy'] }
        : { orderBy?: FunctionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FunctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFunctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Function model
   */
  readonly fields: FunctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Function.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FunctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Function model
   */
  interface FunctionFieldRefs {
    readonly id: FieldRef<"Function", 'Int'>
    readonly name: FieldRef<"Function", 'String'>
    readonly groupName: FieldRef<"Function", 'String'>
    readonly component: FieldRef<"Function", 'String'>
    readonly role: FieldRef<"Function", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Function findUnique
   */
  export type FunctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * Filter, which Function to fetch.
     */
    where: FunctionWhereUniqueInput
  }

  /**
   * Function findUniqueOrThrow
   */
  export type FunctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * Filter, which Function to fetch.
     */
    where: FunctionWhereUniqueInput
  }

  /**
   * Function findFirst
   */
  export type FunctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * Filter, which Function to fetch.
     */
    where?: FunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Functions to fetch.
     */
    orderBy?: FunctionOrderByWithRelationInput | FunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Functions.
     */
    cursor?: FunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Functions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Functions.
     */
    distinct?: FunctionScalarFieldEnum | FunctionScalarFieldEnum[]
  }

  /**
   * Function findFirstOrThrow
   */
  export type FunctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * Filter, which Function to fetch.
     */
    where?: FunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Functions to fetch.
     */
    orderBy?: FunctionOrderByWithRelationInput | FunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Functions.
     */
    cursor?: FunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Functions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Functions.
     */
    distinct?: FunctionScalarFieldEnum | FunctionScalarFieldEnum[]
  }

  /**
   * Function findMany
   */
  export type FunctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * Filter, which Functions to fetch.
     */
    where?: FunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Functions to fetch.
     */
    orderBy?: FunctionOrderByWithRelationInput | FunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Functions.
     */
    cursor?: FunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Functions.
     */
    skip?: number
    distinct?: FunctionScalarFieldEnum | FunctionScalarFieldEnum[]
  }

  /**
   * Function create
   */
  export type FunctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * The data needed to create a Function.
     */
    data: XOR<FunctionCreateInput, FunctionUncheckedCreateInput>
  }

  /**
   * Function createMany
   */
  export type FunctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Functions.
     */
    data: FunctionCreateManyInput | FunctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Function update
   */
  export type FunctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * The data needed to update a Function.
     */
    data: XOR<FunctionUpdateInput, FunctionUncheckedUpdateInput>
    /**
     * Choose, which Function to update.
     */
    where: FunctionWhereUniqueInput
  }

  /**
   * Function updateMany
   */
  export type FunctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Functions.
     */
    data: XOR<FunctionUpdateManyMutationInput, FunctionUncheckedUpdateManyInput>
    /**
     * Filter which Functions to update
     */
    where?: FunctionWhereInput
    /**
     * Limit how many Functions to update.
     */
    limit?: number
  }

  /**
   * Function upsert
   */
  export type FunctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * The filter to search for the Function to update in case it exists.
     */
    where: FunctionWhereUniqueInput
    /**
     * In case the Function found by the `where` argument doesn't exist, create a new Function with this data.
     */
    create: XOR<FunctionCreateInput, FunctionUncheckedCreateInput>
    /**
     * In case the Function was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FunctionUpdateInput, FunctionUncheckedUpdateInput>
  }

  /**
   * Function delete
   */
  export type FunctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
    /**
     * Filter which Function to delete.
     */
    where: FunctionWhereUniqueInput
  }

  /**
   * Function deleteMany
   */
  export type FunctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Functions to delete
     */
    where?: FunctionWhereInput
    /**
     * Limit how many Functions to delete.
     */
    limit?: number
  }

  /**
   * Function without action
   */
  export type FunctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Function
     */
    select?: FunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Function
     */
    omit?: FunctionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    dateOfBirth: 'dateOfBirth',
    sex: 'sex',
    phoneNum: 'phoneNum',
    email: 'email',
    password: 'password',
    isActive: 'isActive',
    role: 'role',
    residentId: 'residentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResidentScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    identificationNumber: 'identificationNumber',
    status: 'status',
    householdId: 'householdId'
  };

  export type ResidentScalarFieldEnum = (typeof ResidentScalarFieldEnum)[keyof typeof ResidentScalarFieldEnum]


  export const HouseholdScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    owner: 'owner',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const TemporaryRecordScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type TemporaryRecordScalarFieldEnum = (typeof TemporaryRecordScalarFieldEnum)[keyof typeof TemporaryRecordScalarFieldEnum]


  export const FeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    cycle: 'cycle'
  };

  export type FeeScalarFieldEnum = (typeof FeeScalarFieldEnum)[keyof typeof FeeScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    feeId: 'feeId',
    householdId: 'householdId',
    total: 'total',
    paidStatus: 'paidStatus'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    paidAt: 'paidAt',
    amount: 'amount',
    method: 'method'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FunctionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    groupName: 'groupName',
    component: 'component',
    role: 'role'
  };

  export type FunctionScalarFieldEnum = (typeof FunctionScalarFieldEnum)[keyof typeof FunctionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    phoneNum: 'phoneNum',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ResidentOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    identificationNumber: 'identificationNumber'
  };

  export type ResidentOrderByRelevanceFieldEnum = (typeof ResidentOrderByRelevanceFieldEnum)[keyof typeof ResidentOrderByRelevanceFieldEnum]


  export const HouseholdOrderByRelevanceFieldEnum: {
    owner: 'owner'
  };

  export type HouseholdOrderByRelevanceFieldEnum = (typeof HouseholdOrderByRelevanceFieldEnum)[keyof typeof HouseholdOrderByRelevanceFieldEnum]


  export const FeeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FeeOrderByRelevanceFieldEnum = (typeof FeeOrderByRelevanceFieldEnum)[keyof typeof FeeOrderByRelevanceFieldEnum]


  export const FunctionOrderByRelevanceFieldEnum: {
    name: 'name',
    groupName: 'groupName',
    component: 'component'
  };

  export type FunctionOrderByRelevanceFieldEnum = (typeof FunctionOrderByRelevanceFieldEnum)[keyof typeof FunctionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Cycle'
   */
  export type EnumCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cycle'>
    


  /**
   * Reference to a field of type 'PaidStatus'
   */
  export type EnumPaidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaidStatus'>
    


  /**
   * Reference to a field of type 'Method'
   */
  export type EnumMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Method'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    sex?: EnumSexFilter<"User"> | $Enums.Sex
    phoneNum?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    residentId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resident?: XOR<ResidentNullableScalarRelationFilter, ResidentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    sex?: SortOrder
    phoneNum?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    residentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resident?: ResidentOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    residentId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    sex?: EnumSexFilter<"User"> | $Enums.Sex
    phoneNum?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resident?: XOR<ResidentNullableScalarRelationFilter, ResidentWhereInput> | null
  }, "id" | "email" | "residentId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    sex?: SortOrder
    phoneNum?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    residentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    sex?: EnumSexWithAggregatesFilter<"User"> | $Enums.Sex
    phoneNum?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    residentId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResidentWhereInput = {
    AND?: ResidentWhereInput | ResidentWhereInput[]
    OR?: ResidentWhereInput[]
    NOT?: ResidentWhereInput | ResidentWhereInput[]
    id?: IntFilter<"Resident"> | number
    fullName?: StringFilter<"Resident"> | string
    identificationNumber?: StringFilter<"Resident"> | string
    status?: EnumStatusFilter<"Resident"> | $Enums.Status
    householdId?: IntFilter<"Resident"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    temporaryRecord?: TemporaryRecordListRelationFilter
  }

  export type ResidentOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    identificationNumber?: SortOrder
    status?: SortOrder
    householdId?: SortOrder
    user?: UserOrderByWithRelationInput
    household?: HouseholdOrderByWithRelationInput
    temporaryRecord?: TemporaryRecordOrderByRelationAggregateInput
    _relevance?: ResidentOrderByRelevanceInput
  }

  export type ResidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identificationNumber?: string
    AND?: ResidentWhereInput | ResidentWhereInput[]
    OR?: ResidentWhereInput[]
    NOT?: ResidentWhereInput | ResidentWhereInput[]
    fullName?: StringFilter<"Resident"> | string
    status?: EnumStatusFilter<"Resident"> | $Enums.Status
    householdId?: IntFilter<"Resident"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    temporaryRecord?: TemporaryRecordListRelationFilter
  }, "id" | "identificationNumber">

  export type ResidentOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    identificationNumber?: SortOrder
    status?: SortOrder
    householdId?: SortOrder
    _count?: ResidentCountOrderByAggregateInput
    _avg?: ResidentAvgOrderByAggregateInput
    _max?: ResidentMaxOrderByAggregateInput
    _min?: ResidentMinOrderByAggregateInput
    _sum?: ResidentSumOrderByAggregateInput
  }

  export type ResidentScalarWhereWithAggregatesInput = {
    AND?: ResidentScalarWhereWithAggregatesInput | ResidentScalarWhereWithAggregatesInput[]
    OR?: ResidentScalarWhereWithAggregatesInput[]
    NOT?: ResidentScalarWhereWithAggregatesInput | ResidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resident"> | number
    fullName?: StringWithAggregatesFilter<"Resident"> | string
    identificationNumber?: StringWithAggregatesFilter<"Resident"> | string
    status?: EnumStatusWithAggregatesFilter<"Resident"> | $Enums.Status
    householdId?: IntWithAggregatesFilter<"Resident"> | number
  }

  export type HouseholdWhereInput = {
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    id?: IntFilter<"Household"> | number
    roomNumber?: IntFilter<"Household"> | number
    owner?: StringNullableFilter<"Household"> | string | null
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    resident?: ResidentListRelationFilter
    bill?: BillListRelationFilter
  }

  export type HouseholdOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    owner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resident?: ResidentOrderByRelationAggregateInput
    bill?: BillOrderByRelationAggregateInput
    _relevance?: HouseholdOrderByRelevanceInput
  }

  export type HouseholdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomNumber?: number
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    owner?: StringNullableFilter<"Household"> | string | null
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    resident?: ResidentListRelationFilter
    bill?: BillListRelationFilter
  }, "id" | "roomNumber">

  export type HouseholdOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    owner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HouseholdCountOrderByAggregateInput
    _avg?: HouseholdAvgOrderByAggregateInput
    _max?: HouseholdMaxOrderByAggregateInput
    _min?: HouseholdMinOrderByAggregateInput
    _sum?: HouseholdSumOrderByAggregateInput
  }

  export type HouseholdScalarWhereWithAggregatesInput = {
    AND?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    OR?: HouseholdScalarWhereWithAggregatesInput[]
    NOT?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Household"> | number
    roomNumber?: IntWithAggregatesFilter<"Household"> | number
    owner?: StringNullableWithAggregatesFilter<"Household"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
  }

  export type TemporaryRecordWhereInput = {
    AND?: TemporaryRecordWhereInput | TemporaryRecordWhereInput[]
    OR?: TemporaryRecordWhereInput[]
    NOT?: TemporaryRecordWhereInput | TemporaryRecordWhereInput[]
    id?: IntFilter<"TemporaryRecord"> | number
    residentId?: IntFilter<"TemporaryRecord"> | number
    type?: EnumTypeFilter<"TemporaryRecord"> | $Enums.Type
    startDate?: DateTimeFilter<"TemporaryRecord"> | Date | string
    endDate?: DateTimeFilter<"TemporaryRecord"> | Date | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }

  export type TemporaryRecordOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    resident?: ResidentOrderByWithRelationInput
  }

  export type TemporaryRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemporaryRecordWhereInput | TemporaryRecordWhereInput[]
    OR?: TemporaryRecordWhereInput[]
    NOT?: TemporaryRecordWhereInput | TemporaryRecordWhereInput[]
    residentId?: IntFilter<"TemporaryRecord"> | number
    type?: EnumTypeFilter<"TemporaryRecord"> | $Enums.Type
    startDate?: DateTimeFilter<"TemporaryRecord"> | Date | string
    endDate?: DateTimeFilter<"TemporaryRecord"> | Date | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }, "id">

  export type TemporaryRecordOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: TemporaryRecordCountOrderByAggregateInput
    _avg?: TemporaryRecordAvgOrderByAggregateInput
    _max?: TemporaryRecordMaxOrderByAggregateInput
    _min?: TemporaryRecordMinOrderByAggregateInput
    _sum?: TemporaryRecordSumOrderByAggregateInput
  }

  export type TemporaryRecordScalarWhereWithAggregatesInput = {
    AND?: TemporaryRecordScalarWhereWithAggregatesInput | TemporaryRecordScalarWhereWithAggregatesInput[]
    OR?: TemporaryRecordScalarWhereWithAggregatesInput[]
    NOT?: TemporaryRecordScalarWhereWithAggregatesInput | TemporaryRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemporaryRecord"> | number
    residentId?: IntWithAggregatesFilter<"TemporaryRecord"> | number
    type?: EnumTypeWithAggregatesFilter<"TemporaryRecord"> | $Enums.Type
    startDate?: DateTimeWithAggregatesFilter<"TemporaryRecord"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TemporaryRecord"> | Date | string
  }

  export type FeeWhereInput = {
    AND?: FeeWhereInput | FeeWhereInput[]
    OR?: FeeWhereInput[]
    NOT?: FeeWhereInput | FeeWhereInput[]
    id?: IntFilter<"Fee"> | number
    name?: StringFilter<"Fee"> | string
    amount?: IntFilter<"Fee"> | number
    cycle?: EnumCycleFilter<"Fee"> | $Enums.Cycle
    bill?: BillListRelationFilter
  }

  export type FeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    cycle?: SortOrder
    bill?: BillOrderByRelationAggregateInput
    _relevance?: FeeOrderByRelevanceInput
  }

  export type FeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeeWhereInput | FeeWhereInput[]
    OR?: FeeWhereInput[]
    NOT?: FeeWhereInput | FeeWhereInput[]
    name?: StringFilter<"Fee"> | string
    amount?: IntFilter<"Fee"> | number
    cycle?: EnumCycleFilter<"Fee"> | $Enums.Cycle
    bill?: BillListRelationFilter
  }, "id">

  export type FeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    cycle?: SortOrder
    _count?: FeeCountOrderByAggregateInput
    _avg?: FeeAvgOrderByAggregateInput
    _max?: FeeMaxOrderByAggregateInput
    _min?: FeeMinOrderByAggregateInput
    _sum?: FeeSumOrderByAggregateInput
  }

  export type FeeScalarWhereWithAggregatesInput = {
    AND?: FeeScalarWhereWithAggregatesInput | FeeScalarWhereWithAggregatesInput[]
    OR?: FeeScalarWhereWithAggregatesInput[]
    NOT?: FeeScalarWhereWithAggregatesInput | FeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fee"> | number
    name?: StringWithAggregatesFilter<"Fee"> | string
    amount?: IntWithAggregatesFilter<"Fee"> | number
    cycle?: EnumCycleWithAggregatesFilter<"Fee"> | $Enums.Cycle
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: IntFilter<"Bill"> | number
    feeId?: IntFilter<"Bill"> | number
    householdId?: IntFilter<"Bill"> | number
    total?: IntFilter<"Bill"> | number
    paidStatus?: EnumPaidStatusFilter<"Bill"> | $Enums.PaidStatus
    fee?: XOR<FeeScalarRelationFilter, FeeWhereInput>
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    payment?: PaymentListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    feeId?: SortOrder
    householdId?: SortOrder
    total?: SortOrder
    paidStatus?: SortOrder
    fee?: FeeOrderByWithRelationInput
    household?: HouseholdOrderByWithRelationInput
    payment?: PaymentOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    feeId?: IntFilter<"Bill"> | number
    householdId?: IntFilter<"Bill"> | number
    total?: IntFilter<"Bill"> | number
    paidStatus?: EnumPaidStatusFilter<"Bill"> | $Enums.PaidStatus
    fee?: XOR<FeeScalarRelationFilter, FeeWhereInput>
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    payment?: PaymentListRelationFilter
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    feeId?: SortOrder
    householdId?: SortOrder
    total?: SortOrder
    paidStatus?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bill"> | number
    feeId?: IntWithAggregatesFilter<"Bill"> | number
    householdId?: IntWithAggregatesFilter<"Bill"> | number
    total?: IntWithAggregatesFilter<"Bill"> | number
    paidStatus?: EnumPaidStatusWithAggregatesFilter<"Bill"> | $Enums.PaidStatus
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    billId?: IntFilter<"Payment"> | number
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    amount?: IntFilter<"Payment"> | number
    method?: EnumMethodFilter<"Payment"> | $Enums.Method
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    paidAt?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    billId?: IntFilter<"Payment"> | number
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    amount?: IntFilter<"Payment"> | number
    method?: EnumMethodFilter<"Payment"> | $Enums.Method
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    paidAt?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    billId?: IntWithAggregatesFilter<"Payment"> | number
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    method?: EnumMethodWithAggregatesFilter<"Payment"> | $Enums.Method
  }

  export type FunctionWhereInput = {
    AND?: FunctionWhereInput | FunctionWhereInput[]
    OR?: FunctionWhereInput[]
    NOT?: FunctionWhereInput | FunctionWhereInput[]
    id?: IntFilter<"Function"> | number
    name?: StringFilter<"Function"> | string
    groupName?: StringFilter<"Function"> | string
    component?: StringFilter<"Function"> | string
    role?: EnumRoleFilter<"Function"> | $Enums.Role
  }

  export type FunctionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    groupName?: SortOrder
    component?: SortOrder
    role?: SortOrder
    _relevance?: FunctionOrderByRelevanceInput
  }

  export type FunctionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FunctionWhereInput | FunctionWhereInput[]
    OR?: FunctionWhereInput[]
    NOT?: FunctionWhereInput | FunctionWhereInput[]
    name?: StringFilter<"Function"> | string
    groupName?: StringFilter<"Function"> | string
    component?: StringFilter<"Function"> | string
    role?: EnumRoleFilter<"Function"> | $Enums.Role
  }, "id">

  export type FunctionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    groupName?: SortOrder
    component?: SortOrder
    role?: SortOrder
    _count?: FunctionCountOrderByAggregateInput
    _avg?: FunctionAvgOrderByAggregateInput
    _max?: FunctionMaxOrderByAggregateInput
    _min?: FunctionMinOrderByAggregateInput
    _sum?: FunctionSumOrderByAggregateInput
  }

  export type FunctionScalarWhereWithAggregatesInput = {
    AND?: FunctionScalarWhereWithAggregatesInput | FunctionScalarWhereWithAggregatesInput[]
    OR?: FunctionScalarWhereWithAggregatesInput[]
    NOT?: FunctionScalarWhereWithAggregatesInput | FunctionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Function"> | number
    name?: StringWithAggregatesFilter<"Function"> | string
    groupName?: StringWithAggregatesFilter<"Function"> | string
    component?: StringWithAggregatesFilter<"Function"> | string
    role?: EnumRoleWithAggregatesFilter<"Function"> | $Enums.Role
  }

  export type UserCreateInput = {
    fullName: string
    dateOfBirth?: Date | string | null
    sex?: $Enums.Sex
    phoneNum: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resident?: ResidentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    dateOfBirth?: Date | string | null
    sex?: $Enums.Sex
    phoneNum: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
    residentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    phoneNum?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    phoneNum?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    residentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    dateOfBirth?: Date | string | null
    sex?: $Enums.Sex
    phoneNum: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
    residentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    phoneNum?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    phoneNum?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    residentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResidentCreateInput = {
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    user?: UserCreateNestedOneWithoutResidentInput
    household: HouseholdCreateNestedOneWithoutResidentInput
    temporaryRecord?: TemporaryRecordCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateInput = {
    id?: number
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    householdId: number
    user?: UserUncheckedCreateNestedOneWithoutResidentInput
    temporaryRecord?: TemporaryRecordUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneWithoutResidentNestedInput
    household?: HouseholdUpdateOneRequiredWithoutResidentNestedInput
    temporaryRecord?: TemporaryRecordUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    householdId?: IntFieldUpdateOperationsInput | number
    user?: UserUncheckedUpdateOneWithoutResidentNestedInput
    temporaryRecord?: TemporaryRecordUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type ResidentCreateManyInput = {
    id?: number
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    householdId: number
  }

  export type ResidentUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ResidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    householdId?: IntFieldUpdateOperationsInput | number
  }

  export type HouseholdCreateInput = {
    roomNumber: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resident?: ResidentCreateNestedManyWithoutHouseholdInput
    bill?: BillCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateInput = {
    id?: number
    roomNumber: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resident?: ResidentUncheckedCreateNestedManyWithoutHouseholdInput
    bill?: BillUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUpdateInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateManyWithoutHouseholdNestedInput
    bill?: BillUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUncheckedUpdateManyWithoutHouseholdNestedInput
    bill?: BillUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdCreateManyInput = {
    id?: number
    roomNumber: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseholdUpdateManyMutationInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryRecordCreateInput = {
    type?: $Enums.Type
    startDate: Date | string
    endDate: Date | string
    resident: ResidentCreateNestedOneWithoutTemporaryRecordInput
  }

  export type TemporaryRecordUncheckedCreateInput = {
    id?: number
    residentId: number
    type?: $Enums.Type
    startDate: Date | string
    endDate: Date | string
  }

  export type TemporaryRecordUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateOneRequiredWithoutTemporaryRecordNestedInput
  }

  export type TemporaryRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryRecordCreateManyInput = {
    id?: number
    residentId: number
    type?: $Enums.Type
    startDate: Date | string
    endDate: Date | string
  }

  export type TemporaryRecordUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeCreateInput = {
    name: string
    amount: number
    cycle?: $Enums.Cycle
    bill?: BillCreateNestedManyWithoutFeeInput
  }

  export type FeeUncheckedCreateInput = {
    id?: number
    name: string
    amount: number
    cycle?: $Enums.Cycle
    bill?: BillUncheckedCreateNestedManyWithoutFeeInput
  }

  export type FeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cycle?: EnumCycleFieldUpdateOperationsInput | $Enums.Cycle
    bill?: BillUpdateManyWithoutFeeNestedInput
  }

  export type FeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cycle?: EnumCycleFieldUpdateOperationsInput | $Enums.Cycle
    bill?: BillUncheckedUpdateManyWithoutFeeNestedInput
  }

  export type FeeCreateManyInput = {
    id?: number
    name: string
    amount: number
    cycle?: $Enums.Cycle
  }

  export type FeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cycle?: EnumCycleFieldUpdateOperationsInput | $Enums.Cycle
  }

  export type FeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cycle?: EnumCycleFieldUpdateOperationsInput | $Enums.Cycle
  }

  export type BillCreateInput = {
    total: number
    paidStatus?: $Enums.PaidStatus
    fee: FeeCreateNestedOneWithoutBillInput
    household: HouseholdCreateNestedOneWithoutBillInput
    payment?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: number
    feeId: number
    householdId: number
    total: number
    paidStatus?: $Enums.PaidStatus
    payment?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
    fee?: FeeUpdateOneRequiredWithoutBillNestedInput
    household?: HouseholdUpdateOneRequiredWithoutBillNestedInput
    payment?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    feeId?: IntFieldUpdateOperationsInput | number
    householdId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
    payment?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: number
    feeId: number
    householdId: number
    total: number
    paidStatus?: $Enums.PaidStatus
  }

  export type BillUpdateManyMutationInput = {
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
  }

  export type BillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    feeId?: IntFieldUpdateOperationsInput | number
    householdId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
  }

  export type PaymentCreateInput = {
    paidAt?: Date | string
    amount: number
    method?: $Enums.Method
    bill: BillCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    billId: number
    paidAt?: Date | string
    amount: number
    method?: $Enums.Method
  }

  export type PaymentUpdateInput = {
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    bill?: BillUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
  }

  export type PaymentCreateManyInput = {
    id?: number
    billId: number
    paidAt?: Date | string
    amount: number
    method?: $Enums.Method
  }

  export type PaymentUpdateManyMutationInput = {
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
  }

  export type FunctionCreateInput = {
    name: string
    groupName: string
    component: string
    role?: $Enums.Role
  }

  export type FunctionUncheckedCreateInput = {
    id?: number
    name: string
    groupName: string
    component: string
    role?: $Enums.Role
  }

  export type FunctionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type FunctionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type FunctionCreateManyInput = {
    id?: number
    name: string
    groupName: string
    component: string
    role?: $Enums.Role
  }

  export type FunctionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type FunctionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResidentNullableScalarRelationFilter = {
    is?: ResidentWhereInput | null
    isNot?: ResidentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    phoneNum?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    residentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    phoneNum?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    residentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    phoneNum?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    residentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type HouseholdScalarRelationFilter = {
    is?: HouseholdWhereInput
    isNot?: HouseholdWhereInput
  }

  export type TemporaryRecordListRelationFilter = {
    every?: TemporaryRecordWhereInput
    some?: TemporaryRecordWhereInput
    none?: TemporaryRecordWhereInput
  }

  export type TemporaryRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResidentOrderByRelevanceInput = {
    fields: ResidentOrderByRelevanceFieldEnum | ResidentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResidentCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    identificationNumber?: SortOrder
    status?: SortOrder
    householdId?: SortOrder
  }

  export type ResidentAvgOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
  }

  export type ResidentMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    identificationNumber?: SortOrder
    status?: SortOrder
    householdId?: SortOrder
  }

  export type ResidentMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    identificationNumber?: SortOrder
    status?: SortOrder
    householdId?: SortOrder
  }

  export type ResidentSumOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ResidentListRelationFilter = {
    every?: ResidentWhereInput
    some?: ResidentWhereInput
    none?: ResidentWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type ResidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdOrderByRelevanceInput = {
    fields: HouseholdOrderByRelevanceFieldEnum | HouseholdOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HouseholdCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdAvgOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
  }

  export type HouseholdMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdSumOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type ResidentScalarRelationFilter = {
    is?: ResidentWhereInput
    isNot?: ResidentWhereInput
  }

  export type TemporaryRecordCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type TemporaryRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type TemporaryRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type TemporaryRecordMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type TemporaryRecordSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type EnumCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.Cycle | EnumCycleFieldRefInput<$PrismaModel>
    in?: $Enums.Cycle[]
    notIn?: $Enums.Cycle[]
    not?: NestedEnumCycleFilter<$PrismaModel> | $Enums.Cycle
  }

  export type FeeOrderByRelevanceInput = {
    fields: FeeOrderByRelevanceFieldEnum | FeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    cycle?: SortOrder
  }

  export type FeeAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    cycle?: SortOrder
  }

  export type FeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    cycle?: SortOrder
  }

  export type FeeSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type EnumCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cycle | EnumCycleFieldRefInput<$PrismaModel>
    in?: $Enums.Cycle[]
    notIn?: $Enums.Cycle[]
    not?: NestedEnumCycleWithAggregatesFilter<$PrismaModel> | $Enums.Cycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCycleFilter<$PrismaModel>
    _max?: NestedEnumCycleFilter<$PrismaModel>
  }

  export type EnumPaidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidStatus | EnumPaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaidStatus[]
    notIn?: $Enums.PaidStatus[]
    not?: NestedEnumPaidStatusFilter<$PrismaModel> | $Enums.PaidStatus
  }

  export type FeeScalarRelationFilter = {
    is?: FeeWhereInput
    isNot?: FeeWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    feeId?: SortOrder
    householdId?: SortOrder
    total?: SortOrder
    paidStatus?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    id?: SortOrder
    feeId?: SortOrder
    householdId?: SortOrder
    total?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    feeId?: SortOrder
    householdId?: SortOrder
    total?: SortOrder
    paidStatus?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    feeId?: SortOrder
    householdId?: SortOrder
    total?: SortOrder
    paidStatus?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    id?: SortOrder
    feeId?: SortOrder
    householdId?: SortOrder
    total?: SortOrder
  }

  export type EnumPaidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidStatus | EnumPaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaidStatus[]
    notIn?: $Enums.PaidStatus[]
    not?: NestedEnumPaidStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaidStatusFilter<$PrismaModel>
    _max?: NestedEnumPaidStatusFilter<$PrismaModel>
  }

  export type EnumMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[]
    notIn?: $Enums.Method[]
    not?: NestedEnumMethodFilter<$PrismaModel> | $Enums.Method
  }

  export type BillScalarRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    paidAt?: SortOrder
    amount?: SortOrder
    method?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    paidAt?: SortOrder
    amount?: SortOrder
    method?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    paidAt?: SortOrder
    amount?: SortOrder
    method?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
  }

  export type EnumMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[]
    notIn?: $Enums.Method[]
    not?: NestedEnumMethodWithAggregatesFilter<$PrismaModel> | $Enums.Method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMethodFilter<$PrismaModel>
    _max?: NestedEnumMethodFilter<$PrismaModel>
  }

  export type FunctionOrderByRelevanceInput = {
    fields: FunctionOrderByRelevanceFieldEnum | FunctionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FunctionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupName?: SortOrder
    component?: SortOrder
    role?: SortOrder
  }

  export type FunctionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FunctionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupName?: SortOrder
    component?: SortOrder
    role?: SortOrder
  }

  export type FunctionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupName?: SortOrder
    component?: SortOrder
    role?: SortOrder
  }

  export type FunctionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResidentCreateNestedOneWithoutUserInput = {
    create?: XOR<ResidentCreateWithoutUserInput, ResidentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutUserInput
    connect?: ResidentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResidentUpdateOneWithoutUserNestedInput = {
    create?: XOR<ResidentCreateWithoutUserInput, ResidentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutUserInput
    upsert?: ResidentUpsertWithoutUserInput
    disconnect?: ResidentWhereInput | boolean
    delete?: ResidentWhereInput | boolean
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutUserInput, ResidentUpdateWithoutUserInput>, ResidentUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutResidentInput = {
    create?: XOR<UserCreateWithoutResidentInput, UserUncheckedCreateWithoutResidentInput>
    connectOrCreate?: UserCreateOrConnectWithoutResidentInput
    connect?: UserWhereUniqueInput
  }

  export type HouseholdCreateNestedOneWithoutResidentInput = {
    create?: XOR<HouseholdCreateWithoutResidentInput, HouseholdUncheckedCreateWithoutResidentInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutResidentInput
    connect?: HouseholdWhereUniqueInput
  }

  export type TemporaryRecordCreateNestedManyWithoutResidentInput = {
    create?: XOR<TemporaryRecordCreateWithoutResidentInput, TemporaryRecordUncheckedCreateWithoutResidentInput> | TemporaryRecordCreateWithoutResidentInput[] | TemporaryRecordUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: TemporaryRecordCreateOrConnectWithoutResidentInput | TemporaryRecordCreateOrConnectWithoutResidentInput[]
    createMany?: TemporaryRecordCreateManyResidentInputEnvelope
    connect?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutResidentInput = {
    create?: XOR<UserCreateWithoutResidentInput, UserUncheckedCreateWithoutResidentInput>
    connectOrCreate?: UserCreateOrConnectWithoutResidentInput
    connect?: UserWhereUniqueInput
  }

  export type TemporaryRecordUncheckedCreateNestedManyWithoutResidentInput = {
    create?: XOR<TemporaryRecordCreateWithoutResidentInput, TemporaryRecordUncheckedCreateWithoutResidentInput> | TemporaryRecordCreateWithoutResidentInput[] | TemporaryRecordUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: TemporaryRecordCreateOrConnectWithoutResidentInput | TemporaryRecordCreateOrConnectWithoutResidentInput[]
    createMany?: TemporaryRecordCreateManyResidentInputEnvelope
    connect?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneWithoutResidentNestedInput = {
    create?: XOR<UserCreateWithoutResidentInput, UserUncheckedCreateWithoutResidentInput>
    connectOrCreate?: UserCreateOrConnectWithoutResidentInput
    upsert?: UserUpsertWithoutResidentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResidentInput, UserUpdateWithoutResidentInput>, UserUncheckedUpdateWithoutResidentInput>
  }

  export type HouseholdUpdateOneRequiredWithoutResidentNestedInput = {
    create?: XOR<HouseholdCreateWithoutResidentInput, HouseholdUncheckedCreateWithoutResidentInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutResidentInput
    upsert?: HouseholdUpsertWithoutResidentInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutResidentInput, HouseholdUpdateWithoutResidentInput>, HouseholdUncheckedUpdateWithoutResidentInput>
  }

  export type TemporaryRecordUpdateManyWithoutResidentNestedInput = {
    create?: XOR<TemporaryRecordCreateWithoutResidentInput, TemporaryRecordUncheckedCreateWithoutResidentInput> | TemporaryRecordCreateWithoutResidentInput[] | TemporaryRecordUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: TemporaryRecordCreateOrConnectWithoutResidentInput | TemporaryRecordCreateOrConnectWithoutResidentInput[]
    upsert?: TemporaryRecordUpsertWithWhereUniqueWithoutResidentInput | TemporaryRecordUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: TemporaryRecordCreateManyResidentInputEnvelope
    set?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    disconnect?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    delete?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    connect?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    update?: TemporaryRecordUpdateWithWhereUniqueWithoutResidentInput | TemporaryRecordUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: TemporaryRecordUpdateManyWithWhereWithoutResidentInput | TemporaryRecordUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: TemporaryRecordScalarWhereInput | TemporaryRecordScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutResidentNestedInput = {
    create?: XOR<UserCreateWithoutResidentInput, UserUncheckedCreateWithoutResidentInput>
    connectOrCreate?: UserCreateOrConnectWithoutResidentInput
    upsert?: UserUpsertWithoutResidentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResidentInput, UserUpdateWithoutResidentInput>, UserUncheckedUpdateWithoutResidentInput>
  }

  export type TemporaryRecordUncheckedUpdateManyWithoutResidentNestedInput = {
    create?: XOR<TemporaryRecordCreateWithoutResidentInput, TemporaryRecordUncheckedCreateWithoutResidentInput> | TemporaryRecordCreateWithoutResidentInput[] | TemporaryRecordUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: TemporaryRecordCreateOrConnectWithoutResidentInput | TemporaryRecordCreateOrConnectWithoutResidentInput[]
    upsert?: TemporaryRecordUpsertWithWhereUniqueWithoutResidentInput | TemporaryRecordUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: TemporaryRecordCreateManyResidentInputEnvelope
    set?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    disconnect?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    delete?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    connect?: TemporaryRecordWhereUniqueInput | TemporaryRecordWhereUniqueInput[]
    update?: TemporaryRecordUpdateWithWhereUniqueWithoutResidentInput | TemporaryRecordUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: TemporaryRecordUpdateManyWithWhereWithoutResidentInput | TemporaryRecordUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: TemporaryRecordScalarWhereInput | TemporaryRecordScalarWhereInput[]
  }

  export type ResidentCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ResidentCreateWithoutHouseholdInput, ResidentUncheckedCreateWithoutHouseholdInput> | ResidentCreateWithoutHouseholdInput[] | ResidentUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutHouseholdInput | ResidentCreateOrConnectWithoutHouseholdInput[]
    createMany?: ResidentCreateManyHouseholdInputEnvelope
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<BillCreateWithoutHouseholdInput, BillUncheckedCreateWithoutHouseholdInput> | BillCreateWithoutHouseholdInput[] | BillUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: BillCreateOrConnectWithoutHouseholdInput | BillCreateOrConnectWithoutHouseholdInput[]
    createMany?: BillCreateManyHouseholdInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type ResidentUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ResidentCreateWithoutHouseholdInput, ResidentUncheckedCreateWithoutHouseholdInput> | ResidentCreateWithoutHouseholdInput[] | ResidentUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutHouseholdInput | ResidentCreateOrConnectWithoutHouseholdInput[]
    createMany?: ResidentCreateManyHouseholdInputEnvelope
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<BillCreateWithoutHouseholdInput, BillUncheckedCreateWithoutHouseholdInput> | BillCreateWithoutHouseholdInput[] | BillUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: BillCreateOrConnectWithoutHouseholdInput | BillCreateOrConnectWithoutHouseholdInput[]
    createMany?: BillCreateManyHouseholdInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ResidentUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ResidentCreateWithoutHouseholdInput, ResidentUncheckedCreateWithoutHouseholdInput> | ResidentCreateWithoutHouseholdInput[] | ResidentUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutHouseholdInput | ResidentCreateOrConnectWithoutHouseholdInput[]
    upsert?: ResidentUpsertWithWhereUniqueWithoutHouseholdInput | ResidentUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ResidentCreateManyHouseholdInputEnvelope
    set?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    disconnect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    delete?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    update?: ResidentUpdateWithWhereUniqueWithoutHouseholdInput | ResidentUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ResidentUpdateManyWithWhereWithoutHouseholdInput | ResidentUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
  }

  export type BillUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<BillCreateWithoutHouseholdInput, BillUncheckedCreateWithoutHouseholdInput> | BillCreateWithoutHouseholdInput[] | BillUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: BillCreateOrConnectWithoutHouseholdInput | BillCreateOrConnectWithoutHouseholdInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutHouseholdInput | BillUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: BillCreateManyHouseholdInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutHouseholdInput | BillUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: BillUpdateManyWithWhereWithoutHouseholdInput | BillUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type ResidentUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ResidentCreateWithoutHouseholdInput, ResidentUncheckedCreateWithoutHouseholdInput> | ResidentCreateWithoutHouseholdInput[] | ResidentUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutHouseholdInput | ResidentCreateOrConnectWithoutHouseholdInput[]
    upsert?: ResidentUpsertWithWhereUniqueWithoutHouseholdInput | ResidentUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ResidentCreateManyHouseholdInputEnvelope
    set?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    disconnect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    delete?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    update?: ResidentUpdateWithWhereUniqueWithoutHouseholdInput | ResidentUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ResidentUpdateManyWithWhereWithoutHouseholdInput | ResidentUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<BillCreateWithoutHouseholdInput, BillUncheckedCreateWithoutHouseholdInput> | BillCreateWithoutHouseholdInput[] | BillUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: BillCreateOrConnectWithoutHouseholdInput | BillCreateOrConnectWithoutHouseholdInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutHouseholdInput | BillUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: BillCreateManyHouseholdInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutHouseholdInput | BillUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: BillUpdateManyWithWhereWithoutHouseholdInput | BillUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type ResidentCreateNestedOneWithoutTemporaryRecordInput = {
    create?: XOR<ResidentCreateWithoutTemporaryRecordInput, ResidentUncheckedCreateWithoutTemporaryRecordInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutTemporaryRecordInput
    connect?: ResidentWhereUniqueInput
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type ResidentUpdateOneRequiredWithoutTemporaryRecordNestedInput = {
    create?: XOR<ResidentCreateWithoutTemporaryRecordInput, ResidentUncheckedCreateWithoutTemporaryRecordInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutTemporaryRecordInput
    upsert?: ResidentUpsertWithoutTemporaryRecordInput
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutTemporaryRecordInput, ResidentUpdateWithoutTemporaryRecordInput>, ResidentUncheckedUpdateWithoutTemporaryRecordInput>
  }

  export type BillCreateNestedManyWithoutFeeInput = {
    create?: XOR<BillCreateWithoutFeeInput, BillUncheckedCreateWithoutFeeInput> | BillCreateWithoutFeeInput[] | BillUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: BillCreateOrConnectWithoutFeeInput | BillCreateOrConnectWithoutFeeInput[]
    createMany?: BillCreateManyFeeInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutFeeInput = {
    create?: XOR<BillCreateWithoutFeeInput, BillUncheckedCreateWithoutFeeInput> | BillCreateWithoutFeeInput[] | BillUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: BillCreateOrConnectWithoutFeeInput | BillCreateOrConnectWithoutFeeInput[]
    createMany?: BillCreateManyFeeInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type EnumCycleFieldUpdateOperationsInput = {
    set?: $Enums.Cycle
  }

  export type BillUpdateManyWithoutFeeNestedInput = {
    create?: XOR<BillCreateWithoutFeeInput, BillUncheckedCreateWithoutFeeInput> | BillCreateWithoutFeeInput[] | BillUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: BillCreateOrConnectWithoutFeeInput | BillCreateOrConnectWithoutFeeInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutFeeInput | BillUpsertWithWhereUniqueWithoutFeeInput[]
    createMany?: BillCreateManyFeeInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutFeeInput | BillUpdateWithWhereUniqueWithoutFeeInput[]
    updateMany?: BillUpdateManyWithWhereWithoutFeeInput | BillUpdateManyWithWhereWithoutFeeInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutFeeNestedInput = {
    create?: XOR<BillCreateWithoutFeeInput, BillUncheckedCreateWithoutFeeInput> | BillCreateWithoutFeeInput[] | BillUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: BillCreateOrConnectWithoutFeeInput | BillCreateOrConnectWithoutFeeInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutFeeInput | BillUpsertWithWhereUniqueWithoutFeeInput[]
    createMany?: BillCreateManyFeeInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutFeeInput | BillUpdateWithWhereUniqueWithoutFeeInput[]
    updateMany?: BillUpdateManyWithWhereWithoutFeeInput | BillUpdateManyWithWhereWithoutFeeInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type FeeCreateNestedOneWithoutBillInput = {
    create?: XOR<FeeCreateWithoutBillInput, FeeUncheckedCreateWithoutBillInput>
    connectOrCreate?: FeeCreateOrConnectWithoutBillInput
    connect?: FeeWhereUniqueInput
  }

  export type HouseholdCreateNestedOneWithoutBillInput = {
    create?: XOR<HouseholdCreateWithoutBillInput, HouseholdUncheckedCreateWithoutBillInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutBillInput
    connect?: HouseholdWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumPaidStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaidStatus
  }

  export type FeeUpdateOneRequiredWithoutBillNestedInput = {
    create?: XOR<FeeCreateWithoutBillInput, FeeUncheckedCreateWithoutBillInput>
    connectOrCreate?: FeeCreateOrConnectWithoutBillInput
    upsert?: FeeUpsertWithoutBillInput
    connect?: FeeWhereUniqueInput
    update?: XOR<XOR<FeeUpdateToOneWithWhereWithoutBillInput, FeeUpdateWithoutBillInput>, FeeUncheckedUpdateWithoutBillInput>
  }

  export type HouseholdUpdateOneRequiredWithoutBillNestedInput = {
    create?: XOR<HouseholdCreateWithoutBillInput, HouseholdUncheckedCreateWithoutBillInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutBillInput
    upsert?: HouseholdUpsertWithoutBillInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutBillInput, HouseholdUpdateWithoutBillInput>, HouseholdUncheckedUpdateWithoutBillInput>
  }

  export type PaymentUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BillCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BillCreateWithoutPaymentInput, BillUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentInput
    connect?: BillWhereUniqueInput
  }

  export type EnumMethodFieldUpdateOperationsInput = {
    set?: $Enums.Method
  }

  export type BillUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BillCreateWithoutPaymentInput, BillUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentInput
    upsert?: BillUpsertWithoutPaymentInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutPaymentInput, BillUpdateWithoutPaymentInput>, BillUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.Cycle | EnumCycleFieldRefInput<$PrismaModel>
    in?: $Enums.Cycle[]
    notIn?: $Enums.Cycle[]
    not?: NestedEnumCycleFilter<$PrismaModel> | $Enums.Cycle
  }

  export type NestedEnumCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cycle | EnumCycleFieldRefInput<$PrismaModel>
    in?: $Enums.Cycle[]
    notIn?: $Enums.Cycle[]
    not?: NestedEnumCycleWithAggregatesFilter<$PrismaModel> | $Enums.Cycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCycleFilter<$PrismaModel>
    _max?: NestedEnumCycleFilter<$PrismaModel>
  }

  export type NestedEnumPaidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidStatus | EnumPaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaidStatus[]
    notIn?: $Enums.PaidStatus[]
    not?: NestedEnumPaidStatusFilter<$PrismaModel> | $Enums.PaidStatus
  }

  export type NestedEnumPaidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidStatus | EnumPaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaidStatus[]
    notIn?: $Enums.PaidStatus[]
    not?: NestedEnumPaidStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaidStatusFilter<$PrismaModel>
    _max?: NestedEnumPaidStatusFilter<$PrismaModel>
  }

  export type NestedEnumMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[]
    notIn?: $Enums.Method[]
    not?: NestedEnumMethodFilter<$PrismaModel> | $Enums.Method
  }

  export type NestedEnumMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[]
    notIn?: $Enums.Method[]
    not?: NestedEnumMethodWithAggregatesFilter<$PrismaModel> | $Enums.Method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMethodFilter<$PrismaModel>
    _max?: NestedEnumMethodFilter<$PrismaModel>
  }

  export type ResidentCreateWithoutUserInput = {
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    household: HouseholdCreateNestedOneWithoutResidentInput
    temporaryRecord?: TemporaryRecordCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutUserInput = {
    id?: number
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    householdId: number
    temporaryRecord?: TemporaryRecordUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutUserInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutUserInput, ResidentUncheckedCreateWithoutUserInput>
  }

  export type ResidentUpsertWithoutUserInput = {
    update: XOR<ResidentUpdateWithoutUserInput, ResidentUncheckedUpdateWithoutUserInput>
    create: XOR<ResidentCreateWithoutUserInput, ResidentUncheckedCreateWithoutUserInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutUserInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutUserInput, ResidentUncheckedUpdateWithoutUserInput>
  }

  export type ResidentUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    household?: HouseholdUpdateOneRequiredWithoutResidentNestedInput
    temporaryRecord?: TemporaryRecordUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    householdId?: IntFieldUpdateOperationsInput | number
    temporaryRecord?: TemporaryRecordUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type UserCreateWithoutResidentInput = {
    fullName: string
    dateOfBirth?: Date | string | null
    sex?: $Enums.Sex
    phoneNum: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutResidentInput = {
    id?: number
    fullName: string
    dateOfBirth?: Date | string | null
    sex?: $Enums.Sex
    phoneNum: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutResidentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResidentInput, UserUncheckedCreateWithoutResidentInput>
  }

  export type HouseholdCreateWithoutResidentInput = {
    roomNumber: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bill?: BillCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutResidentInput = {
    id?: number
    roomNumber: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bill?: BillUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutResidentInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutResidentInput, HouseholdUncheckedCreateWithoutResidentInput>
  }

  export type TemporaryRecordCreateWithoutResidentInput = {
    type?: $Enums.Type
    startDate: Date | string
    endDate: Date | string
  }

  export type TemporaryRecordUncheckedCreateWithoutResidentInput = {
    id?: number
    type?: $Enums.Type
    startDate: Date | string
    endDate: Date | string
  }

  export type TemporaryRecordCreateOrConnectWithoutResidentInput = {
    where: TemporaryRecordWhereUniqueInput
    create: XOR<TemporaryRecordCreateWithoutResidentInput, TemporaryRecordUncheckedCreateWithoutResidentInput>
  }

  export type TemporaryRecordCreateManyResidentInputEnvelope = {
    data: TemporaryRecordCreateManyResidentInput | TemporaryRecordCreateManyResidentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResidentInput = {
    update: XOR<UserUpdateWithoutResidentInput, UserUncheckedUpdateWithoutResidentInput>
    create: XOR<UserCreateWithoutResidentInput, UserUncheckedCreateWithoutResidentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResidentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResidentInput, UserUncheckedUpdateWithoutResidentInput>
  }

  export type UserUpdateWithoutResidentInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    phoneNum?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    phoneNum?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdUpsertWithoutResidentInput = {
    update: XOR<HouseholdUpdateWithoutResidentInput, HouseholdUncheckedUpdateWithoutResidentInput>
    create: XOR<HouseholdCreateWithoutResidentInput, HouseholdUncheckedCreateWithoutResidentInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutResidentInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutResidentInput, HouseholdUncheckedUpdateWithoutResidentInput>
  }

  export type HouseholdUpdateWithoutResidentInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type TemporaryRecordUpsertWithWhereUniqueWithoutResidentInput = {
    where: TemporaryRecordWhereUniqueInput
    update: XOR<TemporaryRecordUpdateWithoutResidentInput, TemporaryRecordUncheckedUpdateWithoutResidentInput>
    create: XOR<TemporaryRecordCreateWithoutResidentInput, TemporaryRecordUncheckedCreateWithoutResidentInput>
  }

  export type TemporaryRecordUpdateWithWhereUniqueWithoutResidentInput = {
    where: TemporaryRecordWhereUniqueInput
    data: XOR<TemporaryRecordUpdateWithoutResidentInput, TemporaryRecordUncheckedUpdateWithoutResidentInput>
  }

  export type TemporaryRecordUpdateManyWithWhereWithoutResidentInput = {
    where: TemporaryRecordScalarWhereInput
    data: XOR<TemporaryRecordUpdateManyMutationInput, TemporaryRecordUncheckedUpdateManyWithoutResidentInput>
  }

  export type TemporaryRecordScalarWhereInput = {
    AND?: TemporaryRecordScalarWhereInput | TemporaryRecordScalarWhereInput[]
    OR?: TemporaryRecordScalarWhereInput[]
    NOT?: TemporaryRecordScalarWhereInput | TemporaryRecordScalarWhereInput[]
    id?: IntFilter<"TemporaryRecord"> | number
    residentId?: IntFilter<"TemporaryRecord"> | number
    type?: EnumTypeFilter<"TemporaryRecord"> | $Enums.Type
    startDate?: DateTimeFilter<"TemporaryRecord"> | Date | string
    endDate?: DateTimeFilter<"TemporaryRecord"> | Date | string
  }

  export type ResidentCreateWithoutHouseholdInput = {
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    user?: UserCreateNestedOneWithoutResidentInput
    temporaryRecord?: TemporaryRecordCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutHouseholdInput = {
    id?: number
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    user?: UserUncheckedCreateNestedOneWithoutResidentInput
    temporaryRecord?: TemporaryRecordUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutHouseholdInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutHouseholdInput, ResidentUncheckedCreateWithoutHouseholdInput>
  }

  export type ResidentCreateManyHouseholdInputEnvelope = {
    data: ResidentCreateManyHouseholdInput | ResidentCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutHouseholdInput = {
    total: number
    paidStatus?: $Enums.PaidStatus
    fee: FeeCreateNestedOneWithoutBillInput
    payment?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutHouseholdInput = {
    id?: number
    feeId: number
    total: number
    paidStatus?: $Enums.PaidStatus
    payment?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutHouseholdInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutHouseholdInput, BillUncheckedCreateWithoutHouseholdInput>
  }

  export type BillCreateManyHouseholdInputEnvelope = {
    data: BillCreateManyHouseholdInput | BillCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type ResidentUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: ResidentWhereUniqueInput
    update: XOR<ResidentUpdateWithoutHouseholdInput, ResidentUncheckedUpdateWithoutHouseholdInput>
    create: XOR<ResidentCreateWithoutHouseholdInput, ResidentUncheckedCreateWithoutHouseholdInput>
  }

  export type ResidentUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: ResidentWhereUniqueInput
    data: XOR<ResidentUpdateWithoutHouseholdInput, ResidentUncheckedUpdateWithoutHouseholdInput>
  }

  export type ResidentUpdateManyWithWhereWithoutHouseholdInput = {
    where: ResidentScalarWhereInput
    data: XOR<ResidentUpdateManyMutationInput, ResidentUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type ResidentScalarWhereInput = {
    AND?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
    OR?: ResidentScalarWhereInput[]
    NOT?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
    id?: IntFilter<"Resident"> | number
    fullName?: StringFilter<"Resident"> | string
    identificationNumber?: StringFilter<"Resident"> | string
    status?: EnumStatusFilter<"Resident"> | $Enums.Status
    householdId?: IntFilter<"Resident"> | number
  }

  export type BillUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutHouseholdInput, BillUncheckedUpdateWithoutHouseholdInput>
    create: XOR<BillCreateWithoutHouseholdInput, BillUncheckedCreateWithoutHouseholdInput>
  }

  export type BillUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutHouseholdInput, BillUncheckedUpdateWithoutHouseholdInput>
  }

  export type BillUpdateManyWithWhereWithoutHouseholdInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: IntFilter<"Bill"> | number
    feeId?: IntFilter<"Bill"> | number
    householdId?: IntFilter<"Bill"> | number
    total?: IntFilter<"Bill"> | number
    paidStatus?: EnumPaidStatusFilter<"Bill"> | $Enums.PaidStatus
  }

  export type ResidentCreateWithoutTemporaryRecordInput = {
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    user?: UserCreateNestedOneWithoutResidentInput
    household: HouseholdCreateNestedOneWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutTemporaryRecordInput = {
    id?: number
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
    householdId: number
    user?: UserUncheckedCreateNestedOneWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutTemporaryRecordInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutTemporaryRecordInput, ResidentUncheckedCreateWithoutTemporaryRecordInput>
  }

  export type ResidentUpsertWithoutTemporaryRecordInput = {
    update: XOR<ResidentUpdateWithoutTemporaryRecordInput, ResidentUncheckedUpdateWithoutTemporaryRecordInput>
    create: XOR<ResidentCreateWithoutTemporaryRecordInput, ResidentUncheckedCreateWithoutTemporaryRecordInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutTemporaryRecordInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutTemporaryRecordInput, ResidentUncheckedUpdateWithoutTemporaryRecordInput>
  }

  export type ResidentUpdateWithoutTemporaryRecordInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneWithoutResidentNestedInput
    household?: HouseholdUpdateOneRequiredWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutTemporaryRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    householdId?: IntFieldUpdateOperationsInput | number
    user?: UserUncheckedUpdateOneWithoutResidentNestedInput
  }

  export type BillCreateWithoutFeeInput = {
    total: number
    paidStatus?: $Enums.PaidStatus
    household: HouseholdCreateNestedOneWithoutBillInput
    payment?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutFeeInput = {
    id?: number
    householdId: number
    total: number
    paidStatus?: $Enums.PaidStatus
    payment?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutFeeInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutFeeInput, BillUncheckedCreateWithoutFeeInput>
  }

  export type BillCreateManyFeeInputEnvelope = {
    data: BillCreateManyFeeInput | BillCreateManyFeeInput[]
    skipDuplicates?: boolean
  }

  export type BillUpsertWithWhereUniqueWithoutFeeInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutFeeInput, BillUncheckedUpdateWithoutFeeInput>
    create: XOR<BillCreateWithoutFeeInput, BillUncheckedCreateWithoutFeeInput>
  }

  export type BillUpdateWithWhereUniqueWithoutFeeInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutFeeInput, BillUncheckedUpdateWithoutFeeInput>
  }

  export type BillUpdateManyWithWhereWithoutFeeInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutFeeInput>
  }

  export type FeeCreateWithoutBillInput = {
    name: string
    amount: number
    cycle?: $Enums.Cycle
  }

  export type FeeUncheckedCreateWithoutBillInput = {
    id?: number
    name: string
    amount: number
    cycle?: $Enums.Cycle
  }

  export type FeeCreateOrConnectWithoutBillInput = {
    where: FeeWhereUniqueInput
    create: XOR<FeeCreateWithoutBillInput, FeeUncheckedCreateWithoutBillInput>
  }

  export type HouseholdCreateWithoutBillInput = {
    roomNumber: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resident?: ResidentCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutBillInput = {
    id?: number
    roomNumber: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resident?: ResidentUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutBillInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutBillInput, HouseholdUncheckedCreateWithoutBillInput>
  }

  export type PaymentCreateWithoutBillInput = {
    paidAt?: Date | string
    amount: number
    method?: $Enums.Method
  }

  export type PaymentUncheckedCreateWithoutBillInput = {
    id?: number
    paidAt?: Date | string
    amount: number
    method?: $Enums.Method
  }

  export type PaymentCreateOrConnectWithoutBillInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentCreateManyBillInputEnvelope = {
    data: PaymentCreateManyBillInput | PaymentCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type FeeUpsertWithoutBillInput = {
    update: XOR<FeeUpdateWithoutBillInput, FeeUncheckedUpdateWithoutBillInput>
    create: XOR<FeeCreateWithoutBillInput, FeeUncheckedCreateWithoutBillInput>
    where?: FeeWhereInput
  }

  export type FeeUpdateToOneWithWhereWithoutBillInput = {
    where?: FeeWhereInput
    data: XOR<FeeUpdateWithoutBillInput, FeeUncheckedUpdateWithoutBillInput>
  }

  export type FeeUpdateWithoutBillInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cycle?: EnumCycleFieldUpdateOperationsInput | $Enums.Cycle
  }

  export type FeeUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cycle?: EnumCycleFieldUpdateOperationsInput | $Enums.Cycle
  }

  export type HouseholdUpsertWithoutBillInput = {
    update: XOR<HouseholdUpdateWithoutBillInput, HouseholdUncheckedUpdateWithoutBillInput>
    create: XOR<HouseholdCreateWithoutBillInput, HouseholdUncheckedCreateWithoutBillInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutBillInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutBillInput, HouseholdUncheckedUpdateWithoutBillInput>
  }

  export type HouseholdUpdateWithoutBillInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBillInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBillInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    billId?: IntFilter<"Payment"> | number
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    amount?: IntFilter<"Payment"> | number
    method?: EnumMethodFilter<"Payment"> | $Enums.Method
  }

  export type BillCreateWithoutPaymentInput = {
    total: number
    paidStatus?: $Enums.PaidStatus
    fee: FeeCreateNestedOneWithoutBillInput
    household: HouseholdCreateNestedOneWithoutBillInput
  }

  export type BillUncheckedCreateWithoutPaymentInput = {
    id?: number
    feeId: number
    householdId: number
    total: number
    paidStatus?: $Enums.PaidStatus
  }

  export type BillCreateOrConnectWithoutPaymentInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutPaymentInput, BillUncheckedCreateWithoutPaymentInput>
  }

  export type BillUpsertWithoutPaymentInput = {
    update: XOR<BillUpdateWithoutPaymentInput, BillUncheckedUpdateWithoutPaymentInput>
    create: XOR<BillCreateWithoutPaymentInput, BillUncheckedCreateWithoutPaymentInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutPaymentInput, BillUncheckedUpdateWithoutPaymentInput>
  }

  export type BillUpdateWithoutPaymentInput = {
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
    fee?: FeeUpdateOneRequiredWithoutBillNestedInput
    household?: HouseholdUpdateOneRequiredWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    feeId?: IntFieldUpdateOperationsInput | number
    householdId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
  }

  export type TemporaryRecordCreateManyResidentInput = {
    id?: number
    type?: $Enums.Type
    startDate: Date | string
    endDate: Date | string
  }

  export type TemporaryRecordUpdateWithoutResidentInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryRecordUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryRecordUncheckedUpdateManyWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResidentCreateManyHouseholdInput = {
    id?: number
    fullName: string
    identificationNumber: string
    status?: $Enums.Status
  }

  export type BillCreateManyHouseholdInput = {
    id?: number
    feeId: number
    total: number
    paidStatus?: $Enums.PaidStatus
  }

  export type ResidentUpdateWithoutHouseholdInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneWithoutResidentNestedInput
    temporaryRecord?: TemporaryRecordUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUncheckedUpdateOneWithoutResidentNestedInput
    temporaryRecord?: TemporaryRecordUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateManyWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    identificationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type BillUpdateWithoutHouseholdInput = {
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
    fee?: FeeUpdateOneRequiredWithoutBillNestedInput
    payment?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    feeId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
    payment?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    feeId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
  }

  export type BillCreateManyFeeInput = {
    id?: number
    householdId: number
    total: number
    paidStatus?: $Enums.PaidStatus
  }

  export type BillUpdateWithoutFeeInput = {
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
    household?: HouseholdUpdateOneRequiredWithoutBillNestedInput
    payment?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutFeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    householdId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
    payment?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutFeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    householdId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    paidStatus?: EnumPaidStatusFieldUpdateOperationsInput | $Enums.PaidStatus
  }

  export type PaymentCreateManyBillInput = {
    id?: number
    paidAt?: Date | string
    amount: number
    method?: $Enums.Method
  }

  export type PaymentUpdateWithoutBillInput = {
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
  }

  export type PaymentUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
  }

  export type PaymentUncheckedUpdateManyWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
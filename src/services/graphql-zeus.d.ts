/** Query any Pokémon by number or name */
export type Query = {
	__typename?: "Query",
	query?:Query,
	pokemons:(props:{	first:number}) => (Pokemon | undefined)[],
	pokemon:(props:{	id?:string,	name?:string}) => Pokemon
}

/** Represents a Pokémon */
export type Pokemon = {
	__typename?: "Pokemon",
	/** The ID of an object */
	id:string,
	/** The identifier of this Pokémon */
	number?:string,
	/** The name of this Pokémon */
	name?:string,
	/** The minimum and maximum weight of this Pokémon */
	weight?:PokemonDimension,
	/** The minimum and maximum weight of this Pokémon */
	height?:PokemonDimension,
	/** The classification of this Pokémon */
	classification?:string,
	/** The type(s) of this Pokémon */
	types?:(string | undefined)[],
	/** The type(s) of Pokémons that this Pokémon is resistant to */
	resistant?:(string | undefined)[],
	/** The attacks of this Pokémon */
	attacks?:PokemonAttack,
	/** The type(s) of Pokémons that this Pokémon weak to */
	weaknesses?:(string | undefined)[],
	fleeRate?:number,
	/** The maximum CP of this Pokémon */
	maxCP?:number,
	/** The evolutions of this Pokémon */
	evolutions?:(Pokemon | undefined)[],
	/** The evolution requirements of this Pokémon */
	evolutionRequirements?:PokemonEvolutionRequirement,
	/** The maximum HP of this Pokémon */
	maxHP?:number,
	image?:string
}

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
	__typename?: "PokemonDimension",
	/** The minimum value of this dimension */
	minimum?:string,
	/** The maximum value of this dimension */
	maximum?:string
}

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
	__typename?: "PokemonAttack",
	/** The fast attacks of this Pokémon */
	fast?:(Attack | undefined)[],
	/** The special attacks of this Pokémon */
	special?:(Attack | undefined)[]
}

/** Represents a Pokémon's attack types */
export type Attack = {
	__typename?: "Attack",
	/** The name of this Pokémon attack */
	name?:string,
	/** The type of this Pokémon attack */
	type?:string,
	/** The damage of this Pokémon attack */
	damage?:number
}

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
	__typename?: "PokemonEvolutionRequirement",
	/** The amount of candy to evolve */
	amount?:number,
	/** The name of the candy to evolve */
	name?:string
}

export type ValueTypes = {
    /** Query any Pokémon by number or name */
["Query"]: {
	query?:ValueTypes["Query"],
	pokemons:(props:{	first:number}) => (ValueTypes["Pokemon"] | undefined)[],
	pokemon:(props:{	id?:string,	name?:string}) => ValueTypes["Pokemon"]
},
	/** Represents a Pokémon */
["Pokemon"]: {
	/** The ID of an object */
	id:string,
	/** The identifier of this Pokémon */
	number?:string,
	/** The name of this Pokémon */
	name?:string,
	/** The minimum and maximum weight of this Pokémon */
	weight?:ValueTypes["PokemonDimension"],
	/** The minimum and maximum weight of this Pokémon */
	height?:ValueTypes["PokemonDimension"],
	/** The classification of this Pokémon */
	classification?:string,
	/** The type(s) of this Pokémon */
	types?:(string | undefined)[],
	/** The type(s) of Pokémons that this Pokémon is resistant to */
	resistant?:(string | undefined)[],
	/** The attacks of this Pokémon */
	attacks?:ValueTypes["PokemonAttack"],
	/** The type(s) of Pokémons that this Pokémon weak to */
	weaknesses?:(string | undefined)[],
	fleeRate?:number,
	/** The maximum CP of this Pokémon */
	maxCP?:number,
	/** The evolutions of this Pokémon */
	evolutions?:(ValueTypes["Pokemon"] | undefined)[],
	/** The evolution requirements of this Pokémon */
	evolutionRequirements?:ValueTypes["PokemonEvolutionRequirement"],
	/** The maximum HP of this Pokémon */
	maxHP?:number,
	image?:string
},
	/** Represents a Pokémon's dimensions */
["PokemonDimension"]: {
	/** The minimum value of this dimension */
	minimum?:string,
	/** The maximum value of this dimension */
	maximum?:string
},
	/** Represents a Pokémon's attack types */
["PokemonAttack"]: {
	/** The fast attacks of this Pokémon */
	fast?:(ValueTypes["Attack"] | undefined)[],
	/** The special attacks of this Pokémon */
	special?:(ValueTypes["Attack"] | undefined)[]
},
	/** Represents a Pokémon's attack types */
["Attack"]: {
	/** The name of this Pokémon attack */
	name?:string,
	/** The type of this Pokémon attack */
	type?:string,
	/** The damage of this Pokémon attack */
	damage?:number
},
	/** Represents a Pokémon's requirement to evolve */
["PokemonEvolutionRequirement"]: {
	/** The amount of candy to evolve */
	amount?:number,
	/** The name of the candy to evolve */
	name?:string
}
  }



type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type AliasedReturnType<T> = {
    [P in keyof T]: T[P];
  } &
  Record<
    string,
    {
      [P in keyof T]: T[P];
    }
  >;

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type OfType<T> = T extends Array<infer R> ? R : T;
type FirstArgument<F extends AnyFunc> = OfType<ArgsType<F>>;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type State<T> = {
  readonly [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<AliasedReturnType<State<R>>>
    : T[P] extends AnyFunc
    ? AliasedReturnType<State<ReturnType<T[P]>>>
    : IsScalar<T[P], T[P], AliasedReturnType<State<T[P]>>>;
};

export type PlainObject<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<PlainObject<R>>
    : T[P] extends AnyFunc
    ?  PlainObject<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], PlainObject<T[P]>>;
};

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, SelectionSet<OfType<ReturnType<T>>>]
    >
  : IsScalar<T, T extends undefined ? undefined : true, SelectionSet<T>>;

export type SelectionSet<T> = IsScalar<
  T,  T extends undefined ? undefined : true
,  AliasType<
    {
      [P in keyof T]?: ResolveValue<T[P]>;
    }
  >>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

type OperationToGraphQL<V,T> = (o: GraphQLReturner<V>) => Promise<AliasedReturnType<State<T>>>;

type ResolveApiField<T> = T extends Array<infer R>
  ? IsScalar<R, R, State<R>>
  : T extends AnyFunc
  ? IsScalar<OfType<ReturnType<T>>, T, State<OfType<ReturnType<T>>>>
  : IsScalar<T, T, State<T>>;

type ApiFieldToGraphQL<V,T> = (o: ResolveValue<V>) => Promise<ResolveApiField<T>>;

type fetchOptions = ArgsType<typeof fetch>;


export declare function Chain(
  ...options: fetchOptions
):{
  Query: OperationToGraphQL<ValueTypes["Query"],Query>
}

export declare function Api(
  ...options: fetchOptions
):{
  Query: {
query: ApiFieldToGraphQL<ValueTypes["Query"]['query'],Query['query']>,
	pokemons: ApiFieldToGraphQL<ValueTypes["Query"]['pokemons'],Query['pokemons']>,
	pokemon: ApiFieldToGraphQL<ValueTypes["Query"]['pokemon'],Query['pokemon']>
}
}

export declare const Zeus: {
  Query: (o: GraphQLReturner<ValueTypes["Query"]>) => string
}

export declare const Cast: {
  Query: (o:any) => State<Query>
}

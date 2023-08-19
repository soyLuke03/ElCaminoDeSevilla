
export interface Personaje {
    nombre: string,
    clase: string | undefined,
    nivel: number,
    exp: number,
    expSubirLvl: number,
    vidaMax: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number,
    inventario: Objeto[]
}

export interface Clase {
    nombre: string,
    vidaMax: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number,
    inventario: Objeto[]
}

export interface Enemigo {
    nombre: string,
    nivel: number,
    exp: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number
}

export interface MiniBoss {
    nombre: string,
    nivel: number,
    exp: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number
}

export interface Boss {
    nombre: string,
    nivel: number,
    exp: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number
}

export interface Estadisticas {
    vida: number,
    dmg: number,
    armadura: number,
    precision: number,
    agilidad: number,
    dmgCritico: number,
    probabilidadCritica: number
}

export interface Objeto {
    nombre: string
    estadisticas: Estadisticas
}


export interface TipoEnemigo {
    id: string,
    tipo: string
}
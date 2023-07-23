
export interface Personaje {
    nombre: string,
    clase: string,
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
    daño: number,
    armadura: number,
    precision: number,
    agilidad: number,
    dañoCritico: number,
    probabilidadCritica: number
}

export interface Objeto {
    nombre: string
    estadisticas: Estadisticas
}

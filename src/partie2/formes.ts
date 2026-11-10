// Domaine : Formes géométriques (Union discriminée)

export interface Cercle {
  readonly type: "cercle";
  readonly rayon: number;
}

export interface Rectangle {
  readonly type: "rectangle";
  readonly largeur: number;
  readonly hauteur: number;
}

export interface Triangle {
  readonly type: "triangle";
  readonly base: number;
  readonly hauteur: number;
}

// Type Somme représentant toutes les formes géométriques
export type Forme = Cercle | Rectangle | Triangle;

// Constructeurs
export function cercle(rayon: number): Cercle {
  return { type: "cercle", rayon };
}

export function rectangle(largeur: number, hauteur: number): Rectangle {
  return { type: "rectangle", largeur, hauteur };
}

export function triangle(base: number, hauteur: number): Triangle {
  return { type: "triangle", base, hauteur };
}

// Table d'indexation calculée automatiquement sur le discriminant "type"
// Équivaut à :
// {
//   readonly cercle: Cercle;
//   readonly rectangle: Rectangle;
//   readonly triangle: Triangle;
//   ...
// }
export type TableFormes = {
  readonly [F in Forme as F["type"]]: F;
};

// ===========================================================================
// EXEMPLE : Classe de types Affichable<T>
// ===========================================================================

// La classe de types
export interface Affichable<T> {
  readonly afficher: (forme: T) => string;
}

// Type du registre exhaustif pour Affichable
export type RegistreAffichable = {
  readonly [K in keyof TableFormes]: Affichable<TableFormes[K]>;
};

// Implémentations (adaptateurs)
export const affichableCercle: Affichable<Cercle> = {
  afficher: (c) => `Cercle(rayon=${c.rayon})`,
};

export const affichableRectangle: Affichable<Rectangle> = {
  afficher: (r) => `Rectangle(${r.largeur}x${r.hauteur})`,
};

export const affichableTriangle: Affichable<Triangle> = {
  afficher: (t) => `Triangle(base=${t.base}, hauteur=${t.hauteur})`,
};

// Registre regroupant toutes les implémentations de Affichable
export const registreAffichable: RegistreAffichable = {
  cercle: affichableCercle,
  rectangle: affichableRectangle,
  triangle: affichableTriangle,
};

// Opération polymorphe
export function afficher(forme: Forme): string {
  const instance: Affichable<any> = registreAffichable[forme.type];
  return instance.afficher(forme);
}

// ===========================================================================
// PARTIE 1 : Classe de types CalculableAire<T>
// ===========================================================================
export interface CalculableAire<T> {
  readonly aire: (forme: T) => number;
}

// TODO 1.1 : Définir le type RegistreAire en utilisant TableFormes
export type RegistreAire = Record<string, any>; // Remplacer par le type mappé exact

// TODO 1.2 : Implémenter les adaptateurs pour chaque forme :
// - Cercle : Math.PI * rayon^2
// - Rectangle : largeur * hauteur
// - Triangle : (base * hauteur) / 2
export const aireCercle: CalculableAire<Cercle> = {
  aire: (c) => {
    throw new Error("À implémenter (Partie 1)");
  },
};

export const aireRectangle: CalculableAire<Rectangle> = {
  aire: (r) => {
    throw new Error("À implémenter (Partie 1)");
  },
};

export const aireTriangle: CalculableAire<Triangle> = {
  aire: (t) => {
    throw new Error("À implémenter (Partie 1)");
  },
};

// TODO 1.3 : Associer les adaptateurs dans registreAire
export const registreAire: RegistreAire = {};

// TODO 1.4 : Implémenter la fonction aire(forme: Forme): number
export function aire(forme: Forme): number {
  throw new Error("À implémenter (Partie 1)");
}

// ===========================================================================
// PARTIE 2 : Ajout du carré
// ===========================================================================

// TODO (Partie 2.1) : Compléter l'interface Carre avec :
// - readonly type: "carre"
// - readonly cote: number
export interface Carre {}

// TODO (Partie 2.2) : Ajouter Carre à l'union Forme.
// Observez les erreurs de compilation qui apparaissent automatiquement.

// TODO (Partie 2.3) : Implémenter le constructeur carre(cote: number): Carre
export function carre(cote: number): Carre {
  throw new Error("À implémenter (Partie 2)");
}

// TODO (Partie 2.4) : Implémenter l'adaptateur affichableCarre
// Format attendu : "Carre(cote=X)" où X est la valeur de cote.
// Déplacer cette fonction avant son utilisation pour régler l'erreur de compilation.
export const affichableCarre: Affichable<Carre> = {
  afficher: (c) => {
    throw new Error("À implémenter (Partie 2)");
  },
};

// TODO (Partie 2.5) : Implémenter l'adaptateur aireCarre (cote * cote)
// Déplacer cette fonction avant son utilisation pour régler l'erreur de compilation.
export const aireCarre: CalculableAire<Carre> = {
  aire: (c) => {
    throw new Error("À implémenter (Partie 2)");
  },
};

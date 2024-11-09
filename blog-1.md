# The Significance of Union and Intersection Types in TypeScript

In TypeScript, handling different types can sometimes be really challenging and tricky, but TypeScript offers two very helpful tools for this: **Union Types** and **Intersection Types**. 
These tools let us work with multiple types together, creating functions or variables that can handle more than one type of data. In this blog, we’ll look at each type with simple examples.

---

## 1. Union Types

Union types let us a variable hold values of different types. Basically, a union type variable can be either one type or another type, but not both at the same time.

### Syntax

To create a union type, we use the `|` symbol :

```typescript
type UnionType = string | number;

function showMessage(message: string | number): void {
  console.log(`Message: ${message}`);
}

```

## 2. Intersection Types

Intersection types let us combine multiple types into one. If a variable has an intersection type, it must fullfilled all types that it combines. In other words, it must have all properties of the combined types.

### Syntax

To create a union type, we use the `&` symbol :

```typescript
type Employee = {
  employeeId: number;
  department: string;
};

type Manager = {
  level: string;
  managesTeam: boolean;
};

type ManagerEmployee = Employee & Manager;

const manager1: ManagerEmployee = {
  employeeId: 1,
  department: "Sales",
  level: "Senior",
  managesTeam: true,
};
```

## Conclusion

Learning to use union and intersection types effectively can help us write cleaner, more adaptable code and make better use of TypeScript’s powerful type system.

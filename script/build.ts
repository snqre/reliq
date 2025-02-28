import { build } from "tsup";

async function main(): Promise<void> {
    (await build({
        entry: ["src/mod.ts"],
        outDir: "target/esm/",
        format: "esm",
        config: "tsconfig.json",
        minify: true,
        bundle: true,
        sourcemap: true,
        dts: true,
        clean: true,
    }));
    return;
}

main();
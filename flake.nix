{
  description = "etiennerobert.com — personal website";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      packages = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.buildNpmPackage {
            pname = "etiennerobert.com";
            version = "1.0.0";
            src = ./.;
            npmDepsHash = "sha256-6LjvFP0shVP2Rr0ICzohKmkOgsACpAvFyjt745Zr6vA=";
            installPhase = ''
              cp -r dist $out
            '';
          };
        }
      );

      nixosModules.default =
        { pkgs, ... }:
        let
          inherit (pkgs.stdenv.hostPlatform) system;
        in
        {
          services.caddy = {
            enable = true;
            # TODO: Remove http:// post testing
            virtualHosts."http://etiennerobert.com".extraConfig = /* caddy */ ''
              root * ${self.packages.${system}.default}
              try_files {path} /index.html
              file_server
            '';
          };
        };

      devShells = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShell {
            packages = [ pkgs.nodejs_24 ];
          };
        }
      );
    };
}

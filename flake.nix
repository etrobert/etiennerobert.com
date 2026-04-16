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
        {
          services.caddy = {
            enable = true;
            virtualHosts."etiennerobert.com".extraConfig = ''
              root * ${self.packages.${pkgs.system}.default}
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

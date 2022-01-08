# Update the psyoptions-ts submodule
cd psyoptions-ts
git fetch
git merge

# update the psy-american package dependencies
cd packages/psy-american
yarn install
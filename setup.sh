#!/bin/bash

# grep -i titan-common .gitignore &> /dev/null || ( echo '/titan-common' >> .gitignore )

make_symlink() {
    # grep -i "$2" .gitignore &> /dev/null  || ( echo "/$2" >> .gitignore )
    if [ ! -d $2 ]
    then
        # cd resources
        # pwd
        ln -s $1 $2
        echo "Created $2"
        # cd ..
    else
        echo "Skipped $2"
    fi
}
make_symlink "../../../common/client/components" "src/components/shared"
make_symlink "../../../common/client/filters" "src/filters/shared"
make_symlink "../../../common/client/services" "src/services/shared"
make_symlink "../../../common/client/utilities" "src/utilities/shared"

make_symlink "../../../../common/client/assets/css" "src/assets/css/shared"
make_symlink "../../../../common/client/assets/svg" "src/assets/svg/shared"
make_symlink "../../../../common/client/assets/font" "src/assets/font/shared"
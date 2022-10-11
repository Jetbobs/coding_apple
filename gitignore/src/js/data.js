let data = [
    {
        title:'Git',
        subtitle:['Bash'],
        code2:[`git config --global alias.ignore \
        '!gi() { curl -sL https://www.toptal.com/developers/gitignore/api/$@ ;}; gi'`]
    },
    {
        title:'Linux',
        subtitle:['Bash','Zsh','Fish'],
        code2:[`echo "function gi() { curl -sL https://www.toptal.com/developers/gitignore/api/\$@ ;}" >> \
        ~/.bashrc && source ~/.bashrc`,`echo "function gi() { curl -sLw "\n" https://www.toptal.com/developers/gitignore/api/\$@ ;}" >> \
        ~/.zshrc && source ~/.zshrc`,`printf "function gi\n\tcurl -sL https://www.toptal.com/developers/gitignore/api/\$argv\nend\n" > \
        ~/.config/fish/functions/gi.fish`]
    },
    {
        title:'macOS',
        subtitle:['Bash','Zsh','Fish'],
        code2:[`echo "function gi() { curl -sL https://www.toptal.com/developers/gitignore/api/\$@ ;}" >> \
        ~/.bash_profile && source ~/.bash_profile`,`echo "function gi() { curl -sLw "\n" https://www.toptal.com/developers/gitignore/api/\$@ ;}" >> \
        ~/.zshrc && source ~/.zshrc`,`printf "function gi\n\tcurl -sL https://www.toptal.com/developers/gitignore/api/\$argv\nend\n" > \
        ~/.config/fish/functions/gi.fish`]
    }
]
let data2 = [
    {
        title: 'Video tutorial'
    },
    {
        title: 'Customers'
    }
]
let data3 = [
    {
        title: 'Windows',
        subscript:[`Paste the following scripts inside your PowerShell profile (run $profile inside PowerShell to get the profile's location path).`],
        subtitle:['PowerShell v3 Script','PowerShell v2 Script'],
        code2:[`#For PowerShell v3
        Function gig {
          param(
            [Parameter(Mandatory=$true)]
            [string[]]$list
          )
          $params = ($list | ForEach-Object { [uri]::EscapeDataString($_) }) -join ","
          Invoke-WebRequest -Uri "https://www.toptal.com/developers/gitignore/api/$params" | select -ExpandProperty content | Out-File -FilePath $(Join-Path -path $pwd -ChildPath ".gitignore") -Encoding ascii
        }`,`#For PowerShell v2
        Function gig {
          param(
            [Parameter(Mandatory=$true)]
            [string[]]$list
          )
          $params = ($list | ForEach-Object { [uri]::EscapeDataString($_) }) -join ","
          $wc = New-Object System.Net.WebClient
          $wc.Headers["User-Agent"] = "PowerShell/" + $PSVersionTable["PSVersion"].ToString()
          $wc.DownloadFile("https://www.toptal.com/developers/gitignore/api/$params", "$PWD\.gitignore")
        }`]
    },
    {
        title: 'Visual Studio Code - Hasit Mistry'
    },
    {
        title:'GNU Emacs - Juan Placencia'
    }
]
let data4 = [
    {
        title: 'Go - cuong Manh Le'
    },
    {
        title: 'Node -Tejas Kumar'
    },
    {
        title:'Python - Antriksh Yadav'
    },
    {
        title: 'Rust - Sondre Nilsen'
    }
]
export  {data, data2 ,data3, data4};
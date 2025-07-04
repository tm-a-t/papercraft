---
description: You can install TGPy with pip and run it with a shell command. To update TGPy, use update() function.
---

# Installation

TGPy is a command line application that connects to your account much like a Telegram app on a new device.

You can install and run TGPy on your computer, but you might have to use a remote server to have TGPy available 24/7.

::: warning

**Make sure you run TGPy on a trusted machine** — that is, no one except you can read TGPy files on the computer.
Anyone with access to TGPy files can steal your Telegram account.

And the other way round: anyone with access to your Telegram account has access to the machine TGPy is running on.

:::

It’s recommended to use pipx or Docker.

## How to install using pipx

pipx is a package manager for Python command line applications.

1. Make sure you have [Python 3.10 or above](https://www.python.org/) installed.

2. Get pipx if you don’t have it:

   ::: code-group

   ```shell [Ubuntu]
   sudo apt update
   sudo apt install pipx
   pipx ensurepath
   ```
 
   ```shell [Arch]
   sudo pacman -Sy python-pipx
   pipx ensurepath
   ```
   
   ```shell [Fedora]
   sudo dnf install pipx
   pipx ensurepath
   ```

   ```shell [Other Linux]
   # Install `pipx` with your package manager and then:
   pipx ensurepath
   ```
   
   ```shell [Windows]
   python3 -m pip install --user pipx
   python3 -m pipx ensurepath 
   ```

   ```shell [macOS]
   brew install pipx
   pipx ensurepath
   ```

3. Now install TGPy:

    ```shell
    pipx install tgpy
    ```

5. And start it:

    ```shell
    tgpy
    ```


Follow the instructions to connect your Telegram account for the first time. When it’s ready, try sending `ping()` to any chat to check if TGPy is running.

## How to install using Docker

```shell
docker pull tgpy/tgpy
docker run -it --rm -v /tgpy_data:/data tgpy/tgpy
```

Follow the instructions to connect your Telegram account for the first time. When it’s ready, try sending `ping()` to any chat to check if TGPy is running.

## Updating to the latest version

When new updates arrive, you can get them with a TGPy function or from  shell.

::: code-group

```python [From Telegram message]
update()
```


```shell [From shell using pipx]
pipx upgrade tgpy
```

<CodeTab data-title="From shell using docker">
<pre><code>docker pull tgpy/tgpy</code></pre>
<p>Then re-run:</p>
<pre><code>docker run -it --rm -v /tgpy_data:/data tgpy/tgpy</code></pre>
</CodeTab>

:::


## Running in background

To get TGPy running in background, you need to additionally configure systemd, docker compose, or similar.
Instructions are coming.

## Storing data

Config, session, and modules are stored in `~/.config/tgpy` directory (unless you’re using Docker.)
You can change this path via `TGPY_DATA` environment variable.

## Using proxy

If you require proxy to connect to Telegram, do the following:

1. Launch TGPy and provide api_id and api_hash, then quit.
2. Open `config.yml` file (see Data storage above) and add your proxy settings here:
   ```yaml
   core:
       api_hash: ...
       api_id: ...
       proxy:
           proxy_type: socks5
           addr: ...
           port: ...
           username: ...
           password: ...
   ```
3. Run TGPy normally

## Storing API secrets

It is possible to provide Telegram API ID and hash through environment variables `TGPY_API_ID` and `TGPY_API_HASH`.

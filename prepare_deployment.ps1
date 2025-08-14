# Script to prepare deployment files for cPanel

# 1. Configuration
$destinationFolder = "deploy_cpanel"
$itemsToCopy = @(
    "dist",
    "app.js",
    "package.json",
    "package-lock.json"
)

# 2. Create destination folder
if (-not (Test-Path -Path $destinationFolder)) {
    Write-Host "Creating destination folder: $destinationFolder"
    New-Item -ItemType Directory -Path $destinationFolder
} else {
    Write-Host "Destination folder $destinationFolder already exists. Clearing it for a fresh copy."
    # Ensure we don't delete the folder itself, just its content
    Get-ChildItem -Path $destinationFolder | Remove-Item -Recurse -Force
}

# 3. Copy files and folders
Write-Host "Copying necessary files to $destinationFolder..."
foreach ($item in $itemsToCopy) {
    if (Test-Path -Path $item) {
        Write-Host "Copying $item..."
        Copy-Item -Path $item -Destination $destinationFolder -Recurse
    } else {
        Write-Warning "Item not found, skipping: $item"
    }
}

Write-Host ""
Write-Host "--------------------------------------------------"
Write-Host "Deployment package created in '$destinationFolder'."
Write-Host "--------------------------------------------------"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. ZIP the contents of the '$destinationFolder' folder (NOT the folder itself)."
Write-Host "2. Upload the ZIP file to your cPanel File Manager."
Write-Host "3. Unzip the file in the root directory of your application on the server."
Write-Host "4. In the cPanel terminal, navigate into the application directory."
Write-Host "5. Run 'npm install' to install production dependencies."
Write-Host "6. In the 'Setup Node.js App' cPanel interface, ensure your application is configured with:"
Write-Host "   - Application startup file: app.js"
Write-Host "   - Application mode: production"
Write-Host "7. Restart the application from the cPanel interface."
Write-Host ""

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { toast } from "react-toastify";

export default function HomePage() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`환영합니다!`);
  };

  return (
    <Container maxWidth="sm">
      <Box minHeight="80vh" pt="20vh" mb="100px">
        <Box mb={10} textAlign="center">
          <Typography variant="h4">{"EasyApp"}</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Stack width="100%" rowGap={2} mb={2}>
              <TextField
                name="id"
                label="이메일"
                fullWidth
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <TextField
                name="password"
                label="비밀번호"
                fullWidth
                variant="filled"
                type="password"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Stack>
            <Typography variant="body2" textAlign="right">
              계정이 없으신가요?{" "}
              <Link href="/auth/sign-up">
                <Typography variant="body2" color={grey[500]} component="span">
                  회원가입
                </Typography>
              </Link>
            </Typography>
          </Box>
          <Box width="100%">
            <Button fullWidth size="large" variant="contained" type="submit">
              로그인
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

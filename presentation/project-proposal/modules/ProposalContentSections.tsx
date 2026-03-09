"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ProposalContentSectionsProps } from "@/domain/project-proposal/types";
import { MainScreensFeatureMock } from "./MainScreensFeatureMock";

function showMessage(message: string) {
  if (typeof window !== "undefined") {
    window.alert(message);
    return;
  }

  console.info(message);
}

const toast = {
  dismiss: (_id?: string) => {},
  error: (message: string, _options?: Record<string, unknown>) => showMessage(message),
  success: (message: string, _options?: Record<string, unknown>) => showMessage(message),
};

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-2xl font-semibold text-zinc-900">{children}</h2>;
}

function normalizeOtpInput(value: string) {
  return value.replace(/\D/g, "").slice(0, 6);
}

function ScopeSection() {
  return (
    <section id="scope-main" className="space-y-4">
      <SectionTitle>Scope</SectionTitle>
      <p className="text-zinc-700">This proposal follows the exact scope and flow provided in the BRD draft.</p>
    </section>
  );
}

function ExternalServicesSection() {
  return (
    <section id="external-services-main" className="space-y-5">
      <SectionTitle>External Services</SectionTitle>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Payment</h3>
        <ul className="list-disc pl-6">
          <li>Paymongo</li>
          <li>https://www.paymongo.com/pricing</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Cloud Services</h3>
        <ul className="list-disc pl-6">
          <li>NorthFlank (Pay as you go)</li>
          <li>Database backup</li>
          <li>Scale as you go</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Tech</h3>
        <ul className="list-disc pl-6">
          <li>Next.js (Free)</li>
          <li>Stateless backend (Free)</li>
          <li>MongoDB (Free)</li>
          <li>Redis (Free)</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Video Hosting</h3>
        <ul className="list-disc pl-6">
          <li>TBA (For upgrade)</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Domain</h3>
        <ul className="list-disc pl-6">
          <li>Namecheap (Yearly renew depends on the domain selected)</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">App Store/Playtore subscription</h3>
        <ul className="list-disc pl-6">
          <li>Apple App Store (iOS): $99/year ≈ PHP 5,500 - 5,700 per year (depends on exchange rate)</li>
          <li>Google Play Store (Android): $25 one-time ≈ PHP 1,400 - 1,500</li>
        </ul>
      </div>
    </section>
  );
}

function WorkBreakdownSection() {
  return (
    <section id="work-breakdown-main" className="space-y-6">
      <SectionTitle>Work Breakdown Sheet</SectionTitle>
      <p className="text-zinc-700">Use the sidebar items under Work Breakdown Sheet to open each flow section separately.</p>
    </section>
  );
}

function WbsOtpFlowSection() {
  return (
    <section id="wbs-otp-flow" className="space-y-4">
      <SectionTitle>1.0 OTP flow</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>System validate the OTP.</li>
        <li>If valid, show new password inputs.</li>
        <li>This requires a temporary token.</li>
        <li>New password and confirm new password.</li>
        <li>System sends the new created password.</li>
        <li>If success proceed to next(). If failed alert and retry.</li>
        <li>If not valid, apply rate limit request.</li>
        <li>Allowed 3 mistakes or wrong OTP.</li>
        <li>After 3rd attempt, invalidate OTP and temporarily block IP request.</li>
        <li>Wait for 5 minutes before requesting OTP again.</li>
      </ul>
    </section>
  );
}

function WbsLoginSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const toastId = "project-proposal-login-mock-toast";

  const handleMockLogin = () => {
    toast.dismiss(toastId);

    if (!email.trim()) {
      setEmailError(true);
      toast.error("Email address is required.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    setEmailError(false);
    toast.success("Mock login processed. Redirect to homepage on success; alert and retry on failure.", {
      id: toastId,
      closeButton: true,
      duration: 5000,
    });
  };

  return (
    <section id="wbs-login" className="space-y-4">
      <SectionTitle>Login</SectionTitle>
      <div className="max-w-md rounded-xl border border-zinc-300 p-4">
        <h3 className="text-base font-semibold text-zinc-900">Login Screen Mock (Visual Only)</h3>
        <p className="mt-1 text-xs text-zinc-500">For client presentation only. No backend connection.</p>
        <div className="mt-4 space-y-3">
          <div className="space-y-1">
            <label htmlFor="mock-login-email" className="text-sm text-zinc-700">
              Email address
            </label>
            <Input
              id="mock-login-email"
              data-test-id="project-proposal-login-mock-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (event.target.value.trim()) {
                  setEmailError(false);
                }
              }}
              className={emailError ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="mock-login-password" className="text-sm text-zinc-700">
              Password
            </label>
            <div className="relative">
              <Input
                id="mock-login-password"
                data-test-id="project-proposal-login-mock-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                data-test-id="project-proposal-login-mock-toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
          </div>
          <Button
            type="button"
            data-test-id="project-proposal-login-mock-submit"
            className="w-full"
            onClick={handleMockLogin}
          >
            Login
          </Button>
          <div className="flex items-center justify-between text-xs">
            <Link href="#" data-test-id="project-proposal-login-mock-forgot" className="text-zinc-600 underline">
              Forgot password
            </Link>
            <Link href="#" data-test-id="project-proposal-login-mock-signup" className="text-zinc-600 underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>User input email address.</li>
        <li>User input password (can show and hide password).</li>
        <li>User click login then system process login.</li>
        <li>System validates the login payload via Zod before proceeding.</li>
        <li>If success redirect to homepage. If failed alert and retry.</li>
        <li>Has forgot password and sign up link.</li>
      </ul>
    </section>
  );
}

function WbsForgotPasswordSection() {
  const [mode, setMode] = useState<"email" | "otp" | "reset">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockUntil, setLockUntil] = useState<number | null>(null);
  const [otpExpiresAt, setOtpExpiresAt] = useState<number | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const toastId = "project-proposal-forgot-password-mock-toast";

  const handleSendOtp = () => {
    toast.dismiss(toastId);

    if (!email.trim()) {
      setEmailError(true);
      toast.error("Email address is required.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    const now = Date.now();
    if (lockUntil && lockUntil > now) {
      const remainingMinutes = Math.ceil((lockUntil - now) / 60000);
      toast.error(`Request is temporarily blocked. Try again in ${remainingMinutes} minute(s).`, {
        id: toastId,
        closeButton: true,
        duration: 5000,
      });
      return;
    }

    setEmailError(false);
    setMode("otp");
    setFailedAttempts(0);
    setOtp("");
    setOtpExpiresAt(now + 5 * 60 * 1000);
    toast.success("Mock OTP sent via email. Enter any 6-digit OTP for demo. OTP expires in 5 minutes.", {
      id: toastId,
      closeButton: true,
      duration: 7000,
    });
  };

  const handleVerifyOtp = () => {
    toast.dismiss(toastId);

    const now = Date.now();
    if (lockUntil && lockUntil > now) {
      const remainingMinutes = Math.ceil((lockUntil - now) / 60000);
      toast.error(`Too many wrong OTP attempts. Try again in ${remainingMinutes} minute(s).`, {
        id: toastId,
        closeButton: true,
        duration: 5000,
      });
      return;
    }

    if (!otp.trim()) {
      setOtpError(true);
      toast.error("OTP is required.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    if (otp.length !== 6) {
      setOtpError(true);
      toast.error("OTP must be exactly 6 digits.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    if (otpExpiresAt && now > otpExpiresAt) {
      setOtpError(true);
      toast.error("OTP expired. Request a new OTP.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    setOtpError(false);
    setMode("reset");
    toast.success("OTP verified. Temporary secure token granted (mock). You can now set new password.", {
      id: toastId,
      closeButton: true,
      duration: 6000,
    });
  };

  const handleResetPassword = () => {
    toast.dismiss(toastId);

    if (newPassword !== confirmPassword) {
      setPasswordError(true);
      toast.error("Passwords must match.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    setPasswordError(false);
    toast.success("Mock password reset complete. Next step: redirect to login.", {
      id: toastId,
      closeButton: true,
      duration: 5000,
    });
  };

  return (
    <section id="wbs-forgot-password" className="space-y-4">
      <SectionTitle>Forgot password</SectionTitle>
      <div className="max-w-md rounded-xl border border-zinc-300 p-4">
        <h3 className="text-base font-semibold text-zinc-900">Forgot Password Mock (Visual + Simulation)</h3>
        <p className="mt-1 text-xs text-zinc-500">For client presentation only. No backend connection.</p>
        <div className="mt-4 space-y-3">
          {mode === "email" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-email" className="text-sm text-zinc-700">
                  Email address
                </label>
                <Input
                  id="mock-forgot-email"
                  data-test-id="project-proposal-forgot-mock-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (event.target.value.trim()) {
                      setEmailError(false);
                    }
                  }}
                  className={emailError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <Button type="button" data-test-id="project-proposal-forgot-mock-send-otp" onClick={handleSendOtp}>
                Send OTP
              </Button>
            </>
          )}

          {mode === "otp" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-otp" className="text-sm text-zinc-700">
                  OTP code
                </label>
                <Input
                  id="mock-forgot-otp"
                  data-test-id="project-proposal-forgot-mock-otp"
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(event) => {
                    const normalizedValue = normalizeOtpInput(event.target.value);
                    setOtp(normalizedValue);
                    if (normalizedValue.trim()) {
                      setOtpError(false);
                    }
                  }}
                  className={otpError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-forgot-mock-verify-otp" onClick={handleVerifyOtp}>
                  Verify OTP
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  data-test-id="project-proposal-forgot-mock-back-email"
                  onClick={() => setMode("email")}
                >
                  Back to Email
                </Button>
              </div>
            </>
          )}

          {mode === "reset" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-new-password" className="text-sm text-zinc-700">
                  New password
                </label>
                <Input
                  id="mock-forgot-new-password"
                  data-test-id="project-proposal-forgot-mock-new-password"
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-confirm-password" className="text-sm text-zinc-700">
                  Confirm password
                </label>
                <Input
                  id="mock-forgot-confirm-password"
                  data-test-id="project-proposal-forgot-mock-confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <Button type="button" data-test-id="project-proposal-forgot-mock-reset-password" onClick={handleResetPassword}>
                Reset Password
              </Button>
              <Button
                type="button"
                variant="outline"
                data-test-id="project-proposal-forgot-mock-back-otp"
                onClick={() => setMode("otp")}
              >
                Back to OTP
              </Button>
            </>
          )}
        </div>
      </div>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>User input email address.</li>
        <li>System generates OTP and sends via email.</li>
        <li>OTP expiration is 5 minutes.</li>
        <li>User input OTP and apply 1.0 OTP flow.</li>
        <li>If user did not input OTP, redirect to login after ___ mins.</li>
      </ul>
    </section>
  );
}

function WbsSignUpSection() {
  const [mode, setMode] = useState<"email" | "otp" | "password" | "details">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const signupToastId = "project-proposal-signup-mock-toast";

  const handleSendSignupOtp = () => {
    toast.dismiss(signupToastId);
    if (!email.trim()) {
      setEmailError(true);
      toast.error("Email address is required.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setEmailError(false);
    setMode("otp");
    setOtp("");
    toast.success("Mock OTP sent for sign up. Enter any 6-digit OTP for demo.", {
      id: signupToastId,
      closeButton: true,
      duration: 6000,
    });
  };

  const handleVerifySignupOtp = () => {
    toast.dismiss(signupToastId);
    if (!otp.trim()) {
      setOtpError(true);
      toast.error("OTP is required.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    if (otp.length !== 6) {
      setOtpError(true);
      toast.error("OTP must be exactly 6 digits.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setOtpError(false);
    setMode("password");
    toast.success("OTP verified. Continue to password setup.", { id: signupToastId, closeButton: true, duration: 5000 });
  };

  const handlePasswordNext = () => {
    toast.dismiss(signupToastId);
    if (password !== confirmPassword) {
      setPasswordError(true);
      toast.error("Passwords must match.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setPasswordError(false);
    setMode("details");
    toast.success("Password step completed. Continue to details.", { id: signupToastId, closeButton: true, duration: 5000 });
  };

  const handleSubmitSignup = () => {
    toast.dismiss(signupToastId);
    if (!firstName.trim() || !lastName.trim() || !address.trim() || !mobile.trim()) {
      setDetailsError(true);
      toast.error("All required details are needed.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setDetailsError(false);
    toast.success("Mock sign up submitted. If API succeeds, redirect to login.", {
      id: signupToastId,
      closeButton: true,
      duration: 6000,
    });
  };

  return (
    <section id="wbs-sign-up" className="space-y-4">
      <SectionTitle>Sign up</SectionTitle>
      <div className="max-w-md rounded-xl border border-zinc-300 p-4">
        <h3 className="text-base font-semibold text-zinc-900">Sign Up Mock (Visual + Simulation)</h3>
        <p className="mt-1 text-xs text-zinc-500">For client presentation only. No backend connection.</p>
        <div className="mt-4 space-y-3">
          {mode === "email" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-email" className="text-sm text-zinc-700">
                  Email
                </label>
                <Input
                  id="mock-signup-email"
                  data-test-id="project-proposal-signup-mock-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (event.target.value.trim()) {
                      setEmailError(false);
                    }
                  }}
                  placeholder="you@example.com"
                  className={emailError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <Button type="button" data-test-id="project-proposal-signup-mock-send-otp" onClick={handleSendSignupOtp}>
                Send OTP
              </Button>
            </>
          )}

          {mode === "otp" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-otp" className="text-sm text-zinc-700">
                  OTP code
                </label>
                <Input
                  id="mock-signup-otp"
                  data-test-id="project-proposal-signup-mock-otp"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(event) => {
                    const normalizedValue = normalizeOtpInput(event.target.value);
                    setOtp(normalizedValue);
                    if (normalizedValue.trim()) {
                      setOtpError(false);
                    }
                  }}
                  placeholder="Enter 6-digit OTP"
                  className={otpError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-signup-mock-verify-otp" onClick={handleVerifySignupOtp}>
                  Verify OTP
                </Button>
                <Button type="button" variant="outline" data-test-id="project-proposal-signup-mock-back-email" onClick={() => setMode("email")}>
                  Back to Email
                </Button>
              </div>
            </>
          )}

          {mode === "password" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-password" className="text-sm text-zinc-700">
                  New password
                </label>
                <Input
                  id="mock-signup-password"
                  data-test-id="project-proposal-signup-mock-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter password"
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-confirm-password" className="text-sm text-zinc-700">
                  Confirm password
                </label>
                <Input
                  id="mock-signup-confirm-password"
                  data-test-id="project-proposal-signup-mock-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm password"
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-signup-mock-password-next" onClick={handlePasswordNext}>
                  Next
                </Button>
                <Button type="button" variant="outline" data-test-id="project-proposal-signup-mock-back-otp" onClick={() => setMode("otp")}>
                  Back to OTP
                </Button>
              </div>
            </>
          )}

          {mode === "details" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-first-name" className="text-sm text-zinc-700">
                  Name
                </label>
                <Input
                  id="mock-signup-first-name"
                  data-test-id="project-proposal-signup-mock-first-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-last-name" className="text-sm text-zinc-700">
                  Last Name
                </label>
                <Input
                  id="mock-signup-last-name"
                  data-test-id="project-proposal-signup-mock-last-name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last name"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-address" className="text-sm text-zinc-700">
                  Address
                </label>
                <Input
                  id="mock-signup-address"
                  data-test-id="project-proposal-signup-mock-address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Address"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-mobile" className="text-sm text-zinc-700">
                  Mobile Number
                </label>
                <Input
                  id="mock-signup-mobile"
                  data-test-id="project-proposal-signup-mock-mobile"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="Mobile number"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-signup-mock-submit" onClick={handleSubmitSignup}>
                  Sign Up
                </Button>
                <Button type="button" variant="outline" data-test-id="project-proposal-signup-mock-back-password" onClick={() => setMode("password")}>
                  Back
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>By default: Email and Password.</li>
        <li>User input email and system validate via OTP.</li>
        <li>User input OTP and apply 1.0 OTP flow.</li>
        <li>If success show password input (new password and confirm password).</li>
        <li>User click Next and show required details: Name, Last Name, Address, Mobile Number, TBD other details.</li>
        <li>User click sign up and system validates payload via Zod.</li>
        <li>If passed, call API and save to database then redirect to login.</li>
        <li>If failed, alert and retry.</li>
      </ul>
    </section>
  );
}

function MainScreensSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensSection fired");
  }

  return (
    <section id="main-screens-main" className="space-y-5">
      <SectionTitle>APP/WEB Main Screens</SectionTitle>
      <p className="text-zinc-700">
        The home page includes a Header with navigation, a Hero section with image slideshow, and a list of available courses.
        Access behavior is split between Subscribers (course progress, continue/start) and Non-subscribers (free simulation, subscription plans).
      </p>
      <div className="space-y-3">
        <h3 className="font-semibold text-zinc-900">Header</h3>
        <ul className="list-disc pl-6 text-zinc-700">
          <li>
            <span className="font-medium">Left:</span> Menu icon with links — My Learning (if logged in), Certificates (if logged in), FAQ, About Us, Courses, Contacts.
          </li>
          <li>
            <span className="font-medium">Right (logged in):</span> Profile icon → click shows menu: Profile (redirect to profile page), Logout (invalidate token, clear session, redirect to login).
          </li>
          <li>
            <span className="font-medium">Right (not logged in):</span> Login button → redirect to login page.
          </li>
        </ul>
      </div>
      <MainScreensFeatureMock feature="header" />
    </section>
  );
}

function MainScreensHeroSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensHeroSection fired");
  }

  return (
    <section id="screens-home-hero" className="space-y-4">
      <SectionTitle>Home Page: Hero Section</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>Image slideshow powered by React Slick.</li>
        <li>Auto-rotates between featured courses/announcements.</li>
        <li>Mobile: swipe left/right to navigate slides.</li>
      </ul>
      <MainScreensFeatureMock feature="hero" />
    </section>
  );
}

function MainScreensSubscriberSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensSubscriberSection fired");
  }

  return (
    <section id="screens-home-subscriber" className="space-y-4">
      <SectionTitle>Home Page: Subscriber Course View</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>Show list of courses for active subscribers.</li>
        <li>Each course card has a progress bar showing completion percentage.</li>
        <li><span className="font-medium">Continue</span> button — resumes from the last session end point.</li>
        <li><span className="font-medium">Start</span> button — for courses not yet started.</li>
        <li>Both Continue and Start are <span className="font-medium">disabled when due is unpaid</span> — visual indicator shows &quot;Plan Expired — Renew to Continue.&quot;</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Paid learner logs in -{">"} sees Cardio course at 65% progress -{">"} clicks Continue -{">"} resumes from last lesson. Subscription expires mid-session -{">"} session continues but next access blocked until renewal.
      </span>
      <MainScreensFeatureMock feature="subscriber" />
    </section>
  );
}

function MainScreensNonSubscriberSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensNonSubscriberSection fired");
  }

  return (
    <section id="screens-home-nonsubscriber" className="space-y-4">
      <SectionTitle>Home Page: Non-Subscriber Simulation View</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>List of test simulation cards (fully clickable, no lock icon, accessible immediately).</li>
        <li>
          <span className="font-medium">CTA: Start Free</span> — opens modal:
          <ul className="mt-1 list-disc pl-6">
            <li>User selects number of items.</li>
            <li>Starts simulation.</li>
            <li>
              After finished:
              <ul className="mt-1 list-disc pl-6">
                <li>System validates answers and shows scores.</li>
                <li>Shows each question with answer and explanation per choice (why A is wrong, why B is wrong, why C is correct).</li>
                <li>Shows strengths, weaknesses, and areas for improvement.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Subscription Plans</span> — shown after free simulation:
          <ul className="mt-1 list-disc pl-6">
            <li>Monthly — list of included features.</li>
            <li>Quarterly — list of included features.</li>
            <li>Yearly — list of included features.</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Subscribe Flow:</span> User clicks Subscribe -{">"} API calls PayMongo payment intent (GCash, Maya, Credit/Debit) -{">"} user selects payment method -{">"} PayMongo processes payment -{">"} triggers webhook -{">"} system saves encrypted payment info -{">"} updates user from non-subscriber to subscriber -{">"} marks billing period as paid.
        </li>
      </ul>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <span className="font-semibold">Clarification needed:</span> Is monthly payment auto-deduct or does user need to be notified for upcoming due?
      </div>
      <span className="block text-xs text-zinc-500">
        Scenario: New user clicks Start Free -{">"} selects 20 items -{">"} takes simulation -{">"} sees score 72% with detailed explanations -{">"} sees subscription plans -{">"} clicks Subscribe Monthly -{">"} selects GCash -{">"} payment processed -{">"} status updated to subscriber -{">"} full course access unlocked.
      </span>
      <MainScreensFeatureMock feature="non-subscriber" />
    </section>
  );
}

function MainScreensReviewerModalSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensReviewerModalSection fired");
  }

  return (
    <section id="screens-reviewer-modal" className="space-y-4">
      <SectionTitle>Modal Reviewer Flow</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>One question at a time displayed in a fullscreen modal.</li>
        <li>Timer set by admin in admin dashboard (enforced server-side).</li>
        <li>User reads question and selects answer using radio buttons.</li>
        <li><span className="font-medium">Next</span> button — moves to next question, saves current answer.</li>
        <li><span className="font-medium">Previous</span> button — go back and change answer <span className="text-amber-600">(to be clarified)</span>.</li>
        <li>Timer reaches 0:00 — remaining unanswered questions auto-submitted as blank, summary shows score.</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Learner starts Board Review simulation (60 items, 90 min) -{">"} answers Q1 -{">"} clicks Next -{">"} reaches Q23 -{">"} clicks Previous to change Q22 answer -{">"} continues forward -{">"} timer warning at 50% time remaining -{">"} completes all 60 items -{">"} system scores and shows detailed results.
      </span>
      <MainScreensFeatureMock feature="reviewer" />
    </section>
  );
}

function ProfileScreenSection() {
  return (
    <section id="profile-screen-main" className="space-y-4">
      <SectionTitle>Profile Screen</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>User profile picture and personal details.</li>
        <li>
          <span className="font-medium">Performance Cards:</span>
          <ul className="mt-1 list-disc pl-6">
            <li>Simulation test scores (last 3 tests).</li>
            <li>Test performance tracker (progress over time).</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Payment Method:</span>
          <ul className="mt-1 list-disc pl-6">
            <li>Saved for easy repayment in next billing (encrypted).</li>
            <li>Only the user can see masked values: cards **********1441, GCash *********2183.</li>
            <li>System and admin staff cannot see sensitive payment values.</li>
            <li>Even in PayMongo this is encrypted (PCI-DSS compliant).</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Subscription Card:</span>
          <ul className="mt-1 list-disc pl-6">
            <li>Shows selected plan (e.g., Quarterly — expires May 2026).</li>
            <li>Upgrade option (e.g., Monthly → Quarterly).</li>
            <li>Downgrade option.</li>
          </ul>
        </li>
        <li><span className="font-medium">Logout:</span> Invalidates token, clears session, redirects to login.</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Learner opens Profile -{">"} sees Quarterly plan expiring May 2026 -{">"} clicks Upgrade to Yearly -{">"} sees plan comparison -{">"} confirms -{">"} redirected to PayMongo -{">"} payment processed -{">"} subscription updated immediately. Learner clicks Change Payment Method -{">"} sees saved card ****1441 -{">"} can delete and add new card.
      </span>
    </section>
  );
}

function AdminBrdMainSection() {
  return (
    <section id="admin-brd-main" className="space-y-4">
      <SectionTitle>Admin BRD: Purpose</SectionTitle>
      <p className="text-zinc-700">
        The admin area enables the team to run daily LMS operations in one place: manage learners, publish content,
        monitor subscriptions, and track overall business performance.
      </p>
      <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-900">
        <p className="font-semibold">MVP Admin Scope</p>
        <ul className="mt-2 list-disc pl-5 text-xs text-cyan-800">
          <li>Dashboard overview with key metrics (active learners, failed payments, expiring plans)</li>
          <li>User management with search, unlock, and subscription status</li>
          <li>Content management with publishing approval workflow</li>
          <li>Question bank with tagging and explanations</li>
          <li>Simulation settings (timer, items, retakes)</li>
          <li>Subscription and payment monitoring with retry flow</li>
          <li>Reports and activity history / audit log</li>
        </ul>
      </div>
    </section>
  );
}

function AdminBrdRbacSection() {
  return (
    <section id="admin-brd-rbac" className="space-y-4">
      <SectionTitle>Admin BRD: Team Roles</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>
          <span className="font-semibold">Owner / Admin Lead:</span> Full control, team access setup, and final approvals.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario: Owner adds new staff member with email -{">"} assigns &quot;Support Admin&quot; role -{">"} saves. Staff receives
            invitation email, can access Support dashboard, cannot access Finance or Settings modules (403 blocked and logged).
          </span>
        </li>
        <li>
          <span className="font-semibold">Content Admin:</span> Creates, edits, publishes, and archives courses, lessons, and questions.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario: Content Admin opens Cardio Module 2 -{">"} updates lesson notes -{">"} clicks &quot;Request Publish&quot; -{">"} Owner
            reviews diff and approves -{">"} published. Learners see revision within minutes. Previous version archived.
          </span>
        </li>
        <li>
          <span className="font-semibold">Finance Admin:</span> Reviews payments, plan status, and billing concerns.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario: Finance Admin opens failed payments -{">"} filters by today -{">"} sees 5 failures (insufficient funds) -{">"} selects
            all -{">"} sends retry request to learners. Billing issues resolved before access expires.
          </span>
        </li>
        <li>
          <span className="font-semibold">Support Admin:</span> Assists users with account issues, login help, and subscription concerns.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario: Support Admin receives &quot;cannot log in&quot; ticket -{">"} searches learner email -{">"} sees &quot;Account Locked
            (3 failed attempts)&quot; -{">"} clicks Unlock -{">"} system logs action -{">"} learner receives reset email -{">"} logs in within
            one support session.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Email not found -{">"} search returns &quot;No results&quot; with suggestion to search by name or phone.
          </span>
        </li>
        <li>
          <span className="font-semibold">Access Control:</span> Each role sees only the modules and actions they need. Unauthorized access returns 403 and is logged.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario: Support Admin navigates to /admin/pricing -{">"} system checks role server-side -{">"} returns 403 &quot;Access
            Denied&quot; -{">"} attempt logged in audit trail with timestamp, user ID, and attempted resource. UI does not show restricted
            menu items for this role.
          </span>
        </li>
      </ul>
    </section>
  );
}

function AdminBrdModulesSection() {
  return (
    <section id="admin-brd-modules" className="space-y-4">
      <SectionTitle>Admin BRD: What Admin Can Do</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>
          <span className="font-semibold">Dashboard Overview:</span> Active learners, paid learners, expiring plans, and failed payments.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Owner): Opens dashboard at 9 AM -{">"} sees 14 failed payments, 3 support tickets, 2 expiring plans -{">"} assigns
            failed payments to Finance Admin, tickets to Support Admin -{">"} each staff member sees assigned items in their queue within 10
            seconds.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: 100+ failures -{">"} paginated list with bulk-assign for top priority items.
          </span>
        </li>
        <li>
          <span className="font-semibold">User Management:</span> Search by email/name, view profile, check subscription status, unlock accounts.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Support Admin): Searches learner email -{">"} profile loads -{">"} sees &quot;Account Locked (3 failed login
            attempts)&quot; -{">"} clicks Unlock -{">"} system logs action with admin ID and timestamp -{">"} learner receives reset email
            within 1 minute.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Email not found -{">"} returns &quot;No results&quot; with suggestion to search by name or phone. Account suspended by
            admin -{">"} requires Owner approval to unlock.
          </span>
        </li>
        <li>
          <span className="font-semibold">Content Management:</span> Create, edit, publish, and archive courses, modules, and lessons.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Content Admin): New exam guideline arrives -{">"} edits affected lessons -{">"} clicks &quot;Request Publish&quot; -{">"}
            Owner reviews diff view -{">"} approves -{">"} content goes live. Previous version archived with full change history.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Two admins editing same lesson -{">"} system detects conflict -{">"} shows merge prompt. Approval denied -{">"} content
            stays in &quot;Draft&quot;, Content Admin notified with reason.
          </span>
        </li>
        <li>
          <span className="font-semibold">Question Bank:</span> Add questions, set topic/difficulty tags, attach explanations per choice.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Content Admin): Adds 20 questions tagged Pharma / Hard -{">"} attaches explanations (why each choice is right or
            wrong) -{">"} submits. Questions appear as &quot;Draft&quot; -{">"} creates Practice Set &quot;Pharma Hard Review&quot; -{">"} marks
            &quot;Ready for Learners.&quot;
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: CSV import with errors -{">"} system shows line-by-line validation errors -{">"} allows re-upload.
          </span>
        </li>
        <li>
          <span className="font-semibold">Simulation Settings:</span> Timer, number of items, retake rules, passing score.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Owner): Sets Board Review Mode: 90 min timer, 60 items, 2 retakes, 75% passing score -{">"} saves. New learners see
            enforced settings. Existing in-progress attempts keep old settings. Timer enforced server-side.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Invalid combination (60 items, 5-min timer) -{">"} validation error with recommendation. Learner exhausts retakes -{">"}
            shown &quot;Contact Support&quot; message.
          </span>
        </li>
        <li>
          <span className="font-semibold">Subscription & Payment Monitoring:</span> Payment status, subscription lifecycle, failed payment recovery.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Finance Admin): Opens Failed Payments -{">"} filters &quot;Past 24 hours&quot; -{">"} sees 3 failures (insufficient
            funds) -{">"} selects all -{">"} clicks &quot;Send Retry Request&quot; -{">"} learners receive email with &quot;Retry Payment
            Now&quot; button -{">"} payment succeeds via PayMongo -{">"} subscription auto-updates -{">"} learner regains access.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Payment fails again on retry -{">"} escalated to &quot;Requires Manual Follow-up&quot;. Account locked after 3
            consecutive failures.
          </span>
        </li>
        <li>
          <span className="font-semibold">Reports & Analytics:</span> Growth metrics, conversion rates, learner performance by topic.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Owner + Content Admin): View monthly report -{">"} see low scores in Maternal Care -{">"} team creates reinforcement
            lessons targeting weak areas. Report exportable as CSV.
          </span>
        </li>
        <li>
          <span className="font-semibold">Activity History / Audit Log:</span> Logs all major admin actions with who, what, when, before/after values.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Owner): Learner reports &quot;timer was wrong&quot; -{">"} Owner opens Activity History -{">"} filters by &quot;Simulation
            Settings&quot; -{">"} sees entry: &quot;[Admin Name] changed Board Review Mode Duration: 90→60 mins on [date/time]&quot; -{">"}
            corrects setting -{">"} optionally notifies affected learners.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Very old logs (1+ year) -{">"} archived but still searchable with slower query. Multiple changes by different admins
            -{">"} shows full chain of changes.
          </span>
        </li>
      </ul>
    </section>
  );
}

function AdminBrdFlowSection() {
  return (
    <section id="admin-brd-flow" className="space-y-4">
      <SectionTitle>Admin BRD: Admin Journey</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>
          <span className="font-semibold">Step 1 — Login:</span> Admin logs in and lands on role-based dashboard.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Support Admin): Enters email and password -{">"} clicks Login -{">"} system validates credentials -{">"} loads Support
            Admin dashboard with 5 assigned tickets, 3 pending unlocks. Finance, Content, and Settings modules are hidden.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: User with multiple roles -{">"} show role selector, default to primary role, allow quick switch. Session timeout
            -{">"} redirect to login, preserve intended destination for post-login redirect.
          </span>
        </li>
        <li>
          <span className="font-semibold">Step 2 — Triage:</span> Owner reviews priority queue and distributes work.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Owner): Reviews queue -{">"} assigns 14 failed payment items to Finance Admin -{">"} assigns 3 account access tickets to
            Support Admin -{">"} notifications sent within 10 seconds -{">"} assigned items appear in each staff member&apos;s task queue.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Staff member offline -{">"} show &quot;Last seen X minutes ago&quot; warning. Staff already has 5+ assigned items
            -{">"} show workload warning.
          </span>
        </li>
        <li>
          <span className="font-semibold">Step 3 — Content:</span> Content team updates lessons and publishes approved changes.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Content Admin): Drafts lesson changes -{">"} submits for review -{">"} Owner reviews diff -{">"} approves -{">"} content
            published to learners same day. Learners in active session prompted to refresh after completing current lesson.
          </span>
        </li>
        <li>
          <span className="font-semibold">Step 4 — Finance:</span> Finance team reviews billing events and resolves failures.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Finance Admin): Checks failed payment events -{">"} sends bulk retry request to 3 affected learners -{">"} learners
            click &quot;Retry Payment Now&quot; in email -{">"} payment succeeds via PayMongo -{">"} subscription restored automatically.
          </span>
        </li>
        <li>
          <span className="font-semibold">Step 5 — Support:</span> Support team assists learners and confirms resolution.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Support Admin): Receives ticket -{">"} confirms learner identity (email verification) -{">"} triggers account reset flow
            -{">"} verifies learner can log in successfully -{">"} closes ticket with resolution note. All actions logged in audit trail.
          </span>
        </li>
      </ul>
    </section>
  );
}

function AdminBrdNfrSection() {
  return (
    <section id="admin-brd-nfr" className="space-y-4">
      <SectionTitle>Admin BRD: Quality Expectations</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>
          <span className="font-semibold">Security:</span> Role-based access control enforced server-side; unauthorized access blocked and logged.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Support Admin): Navigates to /admin/pricing -{">"} server checks role -{">"} returns 403 -{">"} attempt logged with
            timestamp, user ID, and resource. Sensitive pages stay protected. Repeated failed attempts (5+) flag as suspicious and alert
            Owner.
          </span>
        </li>
        <li>
          <span className="font-semibold">Reliability:</span> Payment and subscription updates are atomic with issue tracking.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Finance Admin): Payment succeeds -{">"} subscription updates automatically -{">"} log entry created -{">"} learner
            unlocks paid modules without re-login. No lost access after successful payment.
          </span>
          <span className="mt-1 block text-xs text-zinc-400">
            Edge case: Subscription update fails after payment success -{">"} system retries with exponential backoff -{">"} alert Finance
            Admin if still failing after 3 retries.
          </span>
        </li>
        <li>
          <span className="font-semibold">Performance:</span> Core admin pages load in under 2 seconds.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Support Admin): During a live support call, opens learner profile -{">"} page loads within 2 seconds -{">"} issue
            resolved while learner is still on the line.
          </span>
        </li>
        <li>
          <span className="font-semibold">Auditability:</span> All admin actions logged with before/after values, timestamp, and admin ID.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (Owner): Investigates reported issue -{">"} opens Activity History -{">"} filters by date range and module -{">"}
            identifies root action and responsible admin -{">"} resolves within 15 minutes.
          </span>
        </li>
        <li>
          <span className="font-semibold">Data Privacy:</span> Payment info masked; PCI-DSS compliant handling.
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario (All Roles): Admin views learner payment section -{">"} sees only masked values (****1441) -{">"} cannot copy or export
            full card numbers. Finance Admin may view expanded transaction references from PayMongo but never full card details.
          </span>
        </li>
      </ul>
    </section>
  );
}

function AdminBrdOpenItemsSection() {
  return (
    <section id="admin-brd-open-items" className="space-y-4">
      <SectionTitle>Admin BRD: Client Decisions Needed</SectionTitle>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 text-left">
              <th className="pb-2 pr-4 font-semibold text-zinc-900">#</th>
              <th className="pb-2 pr-4 font-semibold text-zinc-900">Decision</th>
              <th className="pb-2 pr-4 font-semibold text-zinc-900">Option A</th>
              <th className="pb-2 font-semibold text-zinc-900">Option B</th>
            </tr>
          </thead>
          <tbody className="text-zinc-700">
            <tr className="border-b border-zinc-100">
              <td className="py-3 pr-4 align-top">1</td>
              <td className="py-3 pr-4 align-top font-medium">Monthly plan renewal</td>
              <td className="py-3 pr-4 align-top">
                <span className="font-medium">Auto-renew:</span> Continuous access, no action needed from learner. PayMongo charges
                saved payment method automatically.
              </td>
              <td className="py-3 align-top">
                <span className="font-medium">Manual renew:</span> Learner notified before due date, must confirm payment each cycle.
                Requires reminder emails.
              </td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="py-3 pr-4 align-top">2</td>
              <td className="py-3 pr-4 align-top font-medium">Plan change timing</td>
              <td className="py-3 pr-4 align-top">
                <span className="font-medium">Immediate:</span> Change takes effect now with prorated billing. Learner gets instant
                access to new tier.
              </td>
              <td className="py-3 align-top">
                <span className="font-medium">Next cycle:</span> Change takes effect on next billing date. Simpler reconciliation but
                learner waits.
              </td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="py-3 pr-4 align-top">3</td>
              <td className="py-3 pr-4 align-top font-medium">Admin payment visibility</td>
              <td className="py-3 pr-4 align-top">
                <span className="font-medium">Masked only:</span> All roles see ****1441 format. Maximum privacy.
              </td>
              <td className="py-3 align-top">
                <span className="font-medium">Role-based:</span> Finance sees expanded transaction references from PayMongo. Support and
                Content see masked only.
              </td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="py-3 pr-4 align-top">4</td>
              <td className="py-3 pr-4 align-top font-medium">Account reset policy</td>
              <td className="py-3 pr-4 align-top" colSpan={2}>
                <span className="font-medium">Verify → Reset → Log:</span> Support confirms identity before resetting. Client needs to
                define acceptable verification methods (email OTP, phone call, security question).
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top">5</td>
              <td className="py-3 pr-4 align-top font-medium">Content publishing approval</td>
              <td className="py-3 pr-4 align-top">
                <span className="font-medium">Single approver:</span> Content Admin submits → Owner approves → published. Faster
                turnaround.
              </td>
              <td className="py-3 align-top">
                <span className="font-medium">Two-person approval:</span> Content Admin submits → peer reviews → Owner approves. Reduces
                risk for high-impact curriculum changes.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ProposalContentSections({ activeSection, activeSubSection }: ProposalContentSectionsProps) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: ProposalContentSections fired");
  }

  if (activeSection === "scope") return <ScopeSection />;
  if (activeSection === "external-services") return <ExternalServicesSection />;
  if (activeSection === "work-breakdown") {
    if (activeSubSection === "wbs-otp-flow") return <WbsOtpFlowSection />;
    if (activeSubSection === "wbs-login") return <WbsLoginSection />;
    if (activeSubSection === "wbs-forgot-password") return <WbsForgotPasswordSection />;
    if (activeSubSection === "wbs-sign-up") return <WbsSignUpSection />;
    return <WorkBreakdownSection />;
  }
  if (activeSection === "main-screens") {
    if (activeSubSection === "screens-home-hero") return <MainScreensHeroSection />;
    if (activeSubSection === "screens-home-subscriber") return <MainScreensSubscriberSection />;
    if (activeSubSection === "screens-home-nonsubscriber") return <MainScreensNonSubscriberSection />;
    if (activeSubSection === "screens-reviewer-modal") return <MainScreensReviewerModalSection />;
    return <MainScreensSection />;
  }
  if (activeSection === "profile-screen") return <ProfileScreenSection />;
  if (activeSection === "admin-brd") {
    if (activeSubSection === "admin-brd-rbac") return <AdminBrdRbacSection />;
    if (activeSubSection === "admin-brd-modules") return <AdminBrdModulesSection />;
    if (activeSubSection === "admin-brd-flow") return <AdminBrdFlowSection />;
    if (activeSubSection === "admin-brd-nfr") return <AdminBrdNfrSection />;
    if (activeSubSection === "admin-brd-open-items") return <AdminBrdOpenItemsSection />;
    return <AdminBrdMainSection />;
  }
  return <ScopeSection />;
}
